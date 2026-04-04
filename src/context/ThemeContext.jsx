import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, [theme]);

  const toggleTheme = () => {
    return null;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
