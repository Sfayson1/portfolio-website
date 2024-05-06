import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/Context/ThemeContext';
import Image from 'next/image';
import Profile from '../images/IMG_0687.jpg';
import Footer from '@/components/Footer';
import AboutMe from '@/components/AboutMe';


const AboutPage = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen light">
       

          <Navigation />
     

       
        <div className="flex justify-center my-8">
          <Image className="rounded-full w-1/3 h-auto" src={Profile} alt="Picture of Sherika Fayson"  />
        </div>

       
        <div className="container mx-auto px-4">
         
         <AboutMe/>
         
          <div className="flex justify-center my-8">
            <button className="bg-[#629460]  font-bold py-2 px-4 rounded focus:outline-none">
              Resume
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AboutPage;
