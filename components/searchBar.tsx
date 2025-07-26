import { View, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch }: { onSearch: (text: string) => void }) => {
    const [query, setQuery] = useState('');

    const handleClear = () => {
        setQuery('');
        onSearch('');
    };

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 100,
                paddingHorizontal: 16,
                paddingVertical: 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5,
            }}
        >
            <Ionicons name="search" size={20} color="#6B7280" />
            <TextInput
                style={{
                    flex: 1,
                    marginLeft: 8,
                    fontSize: 16,
                }}
                placeholder="Search documents..."
                value={query}
                onChangeText={(text) => {
                    setQuery(text);
                    onSearch(text);
                }}
            />
            {query.length > 0 && (
                <Pressable onPress={handleClear}>
                    <Ionicons name="close-circle" size={20} color="#9CA3AF" />
                </Pressable>
            )}
        </View>
    );
};

export default SearchBar;
