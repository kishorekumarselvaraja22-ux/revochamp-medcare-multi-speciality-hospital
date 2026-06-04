import React, { createContext, useContext } from 'react';
import { websiteTheme } from '../constants/sections_data';

const ThemeContext = createContext(websiteTheme);

export function ThemeProvider({ theme, children }) {
  const currentTheme = theme || websiteTheme;
  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}