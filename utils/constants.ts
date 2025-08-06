// utils/constants.ts
import { createContext } from 'react';

export const COLORS = {
  lightBg: '#5FF',
  darkBg: '#2A2A2A',
  textLight: '#4A2C2A',
  textDark: '#F4E4BC',
  accent: '#D35400',
};

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});