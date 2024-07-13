import React from 'react';

function Toggle({ toggleDarkMode, isDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="toggle-btn">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default Toggle;
