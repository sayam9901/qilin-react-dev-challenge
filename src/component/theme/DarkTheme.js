import React from 'react';
import { useTheme } from './ThemeContext';

const DarkTheme = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#f0f0f0', color: '#fff' }}>
      <h1>Dark Theme</h1>
      <p>This is the dark theme content.</p>
    </div>
  );
};

export default DarkTheme;