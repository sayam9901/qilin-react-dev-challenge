import React from 'react';
import { useTheme } from './ThemeContext';

const LightTheme = () => {
    // here we are taking the theme from usetheme provider to this child of theme component
  const { theme } = useTheme();

  return (
    // here are some styling and desgining for the component
    <div style={{ background: theme === 'light' ? '#fff' : '#f0f0f0', color: '#333' }}>
      <h1>Light Theme</h1>
      <p>This is the light theme content.</p>
    </div>
  );
};
export default LightTheme;