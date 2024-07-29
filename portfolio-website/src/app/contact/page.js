import Profile from '../images/IMG_0687.jpg';
import NavigationMenu from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Image from "next/image";


const ContactPage = () => {
    return (
        <>
        <NavigationMenu />
        <div className="h-screen flex flex-col  px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mt-20">Contact Me</h2>
          <p className="text-center mt-8">
            Thank you for visiting! Whether you have inquiries, collaboration opportunities,
            or simply want to connect, feel free to reach out or connect with me on social media.
            I'm excited to engage with you and explore potential opportunities together.
          </p>
          <ContactForm />
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
      </>
    );
  };
  
  export default ContactPage;
  