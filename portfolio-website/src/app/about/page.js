import './page.css';
import Navigation from '../../components/Navigation';
import { ThemeProvider } from '@/Context/ThemeContext';
import Image from 'next/image';
import Profile from '../images/IMG_0687.jpg';
import { FaLinkedin } from "react-icons/fa";
import Footer from '@/components/Footer';


const AboutPage = () => {
  return (
    <ThemeProvider>
    <div className="flex flex-col min-h-screen light mb-20">
      <header className={`flex items-center justify-between px-4 py-2 `}>
      
        <Navigation/>
        </header>
        <div className='image-container'>
        <Image className='profile-img' src={Profile} alt="Picture of Sherika Fayson" />

        </div>
      <div className="about-me">
        <p className='paragraph'>
          I am Sherika Fayson, a Software Engineer Apprentice affiliated with
          Vet Who Code, a veteran-founded 501(c)3 charitable non-profit
          organization dedicated to empowering transitioning veterans and
          military spouses through comprehensive software development training.
        </p>
        <p className='paragraph'>
          During my immersive experience, I delved into full-stack development,
          mastering JavaScript, React, Node.js, Express, MongoDB, and more.
          Through hands-on projects like e-commerce platforms and social
          networks, I've honed my skills in design, development, testing,
          implementation, and support.
        </p>
        <p className='paragraph'>
          With a strong foundation built over 9 years in customer service,
          including 3 years specializing in customer complaint management, I
          bring extensive experience in addressing complex issues and delivering
          exceptional service.
        </p>
        <p className='paragraph'>
          Driven by an unwavering passion for learning, I aim to evolve into a
          proficient software engineer capable of crafting robust, secure, and
          intuitive applications that deliver impactful user experiences.
          Leveraging my diverse background in customer service, military
          service, and coding bootcamp training, I am committed to developing
          high-quality software solutions that meet the needs and expectations
          of clients and end-users alike.
        </p>
        <div className='resume'><button className='resume-button'>Resume</button></div>
      </div>

    </div>
    <Footer/>
    </ThemeProvider>
  );
};

export default AboutPage;
