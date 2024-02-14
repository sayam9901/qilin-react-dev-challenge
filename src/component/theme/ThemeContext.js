import React, { createContext, useState, useContext } from 'react';

// creating a context for the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    // by deafult the theme is light 
  const [theme, setTheme] = useState('light');

//   this is a function that i will call from the onclcik of the toggle 
//   button which will change the theme to light to dark and dark to light
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // we are wraping all the children of this component in a theme provider and passing the theme
    // and the toggle function as a prop to them
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);