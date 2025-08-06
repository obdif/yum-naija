// components/SearchBar.tsx
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { ThemeContext, COLORS } from '../utils/constants';

const SearchBar = ({ onSearch, theme }: { onSearch: (query: string) => void; theme: string }) => {
  const [query, setQuery] = useState('');

  const handleChange = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View className="mb-5">
      <TextInput
        className={`p-3 rounded-lg ${theme === 'light' ? 'bg-[${COLORS.lightBg}] text-[${COLORS.textLight}]' : 'bg-[${COLORS.darkBg}] text-[${COLORS.textDark}]'}`}
        placeholder="Search recipes..."
        placeholderTextColor={theme === 'light' ? '#888' : '#aaa'}
        value={query}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default SearchBar;