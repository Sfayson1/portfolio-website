import './globals.css';
import { ThemeProvider } from '../Context/ThemeContext';
import  ToggleSwitch  from '../components/ToggleSwitch';


export default function Home() {
  
  return (
    <ThemeProvider>
    <div className="flex flex-col min-h-screen light">
       <header className={`flex items-center justify-between px-4 py-2 `}>
          <h1 className="text-xl">Sherika's Portfolio</h1>
          <ToggleSwitch />
        </header>
        <main className=" flex min-h-screen flex-col items-center justify-between p-24">
          <p>The rest of the project</p>
        </main>
   
        <footer className="p-4 text-center light">Footer</footer>
     
     
    </div>
    </ThemeProvider>
  );
}
