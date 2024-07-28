import Link from 'next/link';
import ToggleSwitch from './ToggleSwitch';

const NavigationMenu = () => {
  return (
    <nav className="flex justify-between px-4 py-2 ">
      {/* Logo on the left */}
      <h1 className="text-xl justify-start">Sherika's Portfolio</h1>

      {/* Navigation links on the right */}
      <ul className="flex justify-evenly space-x-4">
        <li>
          <Link href="/">
            <span className="hover:text-gray-300">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="hover:text-gray-300">About</span>
          </Link>
        </li>
        <li>
          <Link href="/floridaman">
            <span className="hover:text-gray-300">Florida Man News</span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <span className="hover:text-gray-300">Blog</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="hover:text-gray-300">Contact</span>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <span className="hover:text-gray-300">Resume</span>
          </Link>
        </li>
      </ul>

      {/* Toggle Switch or other component on the right */}
      <div className="toggle-switch-container">
        <ToggleSwitch />
      </div>
    </nav>
  );
};

export default NavigationMenu;
