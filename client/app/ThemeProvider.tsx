'use client'
import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { lightTheme, darkTheme } from '../src/windows/shared/styles/theme';

interface ThemeContextType {
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProviderComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderComponent;