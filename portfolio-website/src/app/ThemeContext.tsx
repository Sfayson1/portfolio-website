'use client'
import React, { ReactNode, createContext } from 'react';

export const ThemeContext = createContext(null);

export default function ThemeProvider ({ children }: { children: ReactNode }){
  return (
  <ThemeContext.Provider value={null}>
    {children}
  </ThemeContext.Provider>
  );
  }