'use client'
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ToggleSwitch.css';

const ToggleSwitch = ({ backgroundLight, backgroundDark, textLight, textDark }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.style.backgroundColor = isDarkMode ? backgroundLight : backgroundDark;
    document.body.style.color = isDarkMode ? textLight : textDark;
  };

  return (
    <div>
      <input
        className='checkbox'
        type="checkbox"
        onChange={handleToggle}
        checked={isDarkMode}
        id="chk"
      />
      <label className='label' htmlFor="chk">
        <FaSun className="sun-icon" /> 
        <FaMoon className='moon-icon'/>
        <div className='ball'></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
