import Link from 'next/link';
import ToggleSwitch from './ToggleSwitch';

const NavigationMenu = () => {
  return (
    <nav className={`flex items-center justify-between px-4 py-2 `}>
      <h1 className="text-xl">Sherika's Portfolio</h1>
      <div>
      <ul className={`flex items-center justify-between px-4 py-2 `}>
        <li className="mx-2">
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/about">
            About
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/special-features">
            <span>Special Features</span>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/blog">
            <span>Blog</span>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/resume">
            <span>Resume</span>
          </Link>
        </li>
      </ul>
      </div>
      <div className="toggle-switch-container">
        <ToggleSwitch />
      </div>
      
    </nav>
  );
};

export default NavigationMenu;