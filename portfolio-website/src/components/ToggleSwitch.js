'use client'
import { useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
 const {theme, toggleTheme} = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme()
  };

  return (
    <div>
      <input
        className='checkbox'
        type="checkbox"
        onChange={handleToggle}
        checked={theme === 'dark'}
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
