import React from 'react';
import { useTheme } from './ThemeContext';

const LightTheme = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#f0f0f0', color: '#333' }}>
      <h1>Light Theme</h1>
      <p>This is the light theme content.</p>
    </div>
  );
};
export default LightTheme;