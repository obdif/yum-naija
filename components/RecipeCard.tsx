// components/RecipeCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ThemeContext, COLORS } from '../utils/constants';

const RecipeCard = ({ recipe, onPress, theme }: { recipe: any; onPress: () => void; theme: string }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`p-4 mb-4 rounded-lg ${theme === 'light' ? 'bg-[${COLORS.lightBg}]' : 'bg-[${COLORS.darkBg}]'}`}>
      <Image source={recipe.image} className="w-full h-40 rounded-lg" />
      <Text className={`mt-2 text-lg font-bold ${theme === 'light' ? `text-[${COLORS.textLight}]` : `text-[${COLORS.textDark}]`}`}>
        {recipe.title}
      </Text>
    </TouchableOpacity>
  );
};

export default RecipeCard;