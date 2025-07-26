import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/searchBar';
import { fetchDocuments, getDownloadUrl } from '../../services/documentsService';

type Document = {
  _id: string;
  name: string;
  mimetype: string;
  size: number;
  createdAt?: string;
  updatedAt?: string;
};

const Documents = () => {
  const [docs, setDocs] = useState<Document[]>([]);
  const [filtered, setFiltered] = useState<Document[]>([]);

  useEffect(() => {
    const loadDocs = async () => {
      const data = await fetchDocuments();
      setDocs(data);
      setFiltered(data);
    };
    loadDocs();
  }, []);

  const handleSearch = (text: string) => {
    const result = docs.filter((doc) =>
      doc.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(result);
  };

  const handleDownload = async (id: string) => {
    const url = getDownloadUrl(id);
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Documents</Text>

      <SearchBar onSearch={handleSearch} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemSize}>{item.size} bytes</Text>
            <View style={styles.actionsRow}>
              <Pressable onPress={() => handleDownload(item._id)}>
                <Text style={styles.downloadText}>Download</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
  },
  itemName: {
    fontWeight: '600',
    fontSize: 18,
  },
  itemSize: {
    fontSize: 12,
    color: '#6b7280',
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 16,
  },
  downloadText: {
    color: '#2563eb',
    fontWeight: '600',
  },
});

export default Documents;
