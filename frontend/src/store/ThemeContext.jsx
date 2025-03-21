import { createContext, useState } from 'react';

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
