// import { createContext, useState } from 'react';

// const ThemeContext = createContext();

// // eslint-disable-next-line react/prop-types
// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     switch (theme) {
//       case 'light':
//         setTheme('dark');
//         break;
//       case 'dark':
//         setTheme('pink');
//         break;
//       case 'pink':
//         setTheme('purple');
//         break;
//       case 'purple':
//         setTheme('light');
//         break;
//       default:
//         setTheme('light');
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeProvider, ThemeContext };