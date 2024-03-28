import Image from "next/image";
import ToggleSwitch from "./ToggleSwitch";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
       <header className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl">Sherika's Portfolio</h1>
        <ToggleSwitch 
        backgroundLight='var(--primary-mint-green)' 
        backgroundDark="var(--color-background-dark)" 
        textLight="var(--text-light-mode)" 
        textDark="var(--text-dark-mode)"
        />
        </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
      <footer className="p-4 text-center">Footer</footer>
    </div>
   
  );
}
