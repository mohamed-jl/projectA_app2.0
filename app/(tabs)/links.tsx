import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getLinks } from '../../services/linksService';
import { ImageBackground } from 'react-native';


type Link = {
    _id?: string;
    title: string;
    url: string;
};

const Links = () => {
    const [links, setLinks] = useState<Link[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLinks() {
            try {
                const data = await getLinks();
                setLinks(data);
            } catch (error) {
                console.error('Failed to fetch links:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchLinks();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#007AFF" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
                {/* Background image is set, no additional content needed here */}
            <Text style={styles.header}>Links</Text>
            <FlatList
                data={links}
                keyExtractor={(item) => item._id || item.title}
                renderItem={({ item }) => (
                    <View style={styles.linkItem}>
                        <Text style={styles.linkTitle}>{item.title}</Text>
                        <Text style={styles.linkUrl}>{item.url}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No links found.</Text>}
                contentContainerStyle={links.length === 0 ? styles.emptyContainer : undefined}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent', // Set to transparent for bg image
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#222',
        alignSelf: 'center',
    },
    linkItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    linkTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#007AFF',
        marginBottom: 4,
    },
    linkUrl: {
        fontSize: 15,
        color: '#555',
    },
    emptyText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 32,
    },
    emptyContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
});



export default Links;
