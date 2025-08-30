import React, { createContext, useState, useContext, useEffect } from 'react';
import theme from './styles/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light'); // Default to light theme

  useEffect(() => {
    // Optional: Load theme from local storage if preferred
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Save theme preference
      return newTheme;
    });
  };

  const selectedTheme = theme[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <StyledThemeProvider theme={selectedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
