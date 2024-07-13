import React from 'react';
import Toggle from './Toggle';

function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <h1><b>Quick Notes</b></h1>
      <Toggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </header>
  );
}

export default Header;
