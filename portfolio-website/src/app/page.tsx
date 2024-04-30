import './globals.css';
import { ThemeProvider } from '../Context/ThemeContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen light">
        <header className={`flex items-center justify-between px-4 py-2 `}>
          {/* <h1 className="text-xl">Sherika's Portfolio</h1> */}
          <Navigation />
        </header>
        <main className=" flex min-h-screen flex-col items-center justify-between p-24">
          <p>The rest of the project</p>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
