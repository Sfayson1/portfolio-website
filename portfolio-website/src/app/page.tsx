import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import HeroSection from '../components/HeroSection';
import Image from 'next/image';
import Profile from './images/IMG_0687.jpg';
import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSection />
      <main className="flex flex-col items-center justify-center flex-1 p-24">
        <div className="flex justify-center my-8">
          <Image
            className="rounded-full w-1/2 h-auto"
            src={Profile}
            alt="Picture of Sherika Fayson"
            priority
          />
        </div>
        <AboutMe />
        <p className="mt-8 font-roboto text-primary-darkRed">
          The rest of the project
        </p>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
