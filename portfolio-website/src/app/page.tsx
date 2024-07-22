import './globals.css';
import { ThemeProvider } from '../Context/ThemeContext';
import Navigation from '../components/Navigation';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen light">
          <Navigation />
       
        <main className=" flex min-h-screen flex-col items-center justify-between p-24">
          <p>The rest of the project</p>
        </main>
        <Newsletter />
        <Footer />
      </div>

  );
}
