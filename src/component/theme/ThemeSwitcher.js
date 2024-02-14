import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
    // here we are using the toggle function from the provider and using it tp change the theem
  const { toggleTheme } = useTheme();

  return (
    // we are calling the toggleTheme in the provider on the click of the button
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
};

export default ThemeSwitcher;