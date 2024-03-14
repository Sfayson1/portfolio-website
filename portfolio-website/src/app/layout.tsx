import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sherika Fayson",
  description: "Personal Portfolio website of Sherika Fayson",
};

type RootLayoutProps = {
  children: React.ReactNode;
  };
  
  export default function RootLayout({ children }: RootLayoutProps) {
    return (
    {children}
    
    );
    }