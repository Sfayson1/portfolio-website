'use client';
import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null); // Initially, no theme set

    useEffect(() => {
        // Detect system theme preference
        const detectTheme = () => {
            if (window.matchMedia) {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            return 'light'; // Default to light if no media query support
        };

        // Set the theme based on system preferences on page load
        const initialTheme = detectTheme();

        // Update the theme state immediately based on system preference
        setTheme(initialTheme);

        // Listen for changes in the system's theme preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setTheme(mediaQuery.matches ? 'dark' : 'light');
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup listener on unmount
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Apply the theme when it's available (on first render, it'll be `null`)
    useEffect(() => {
        if (theme !== null) {
            document.documentElement.classList.remove('theme-light', 'theme-dark');
            document.documentElement.classList.add(`theme-${theme}`);

            // Save the selected theme in localStorage
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('theme', theme);
            }
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
