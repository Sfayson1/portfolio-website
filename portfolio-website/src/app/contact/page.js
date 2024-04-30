import { ThemeProvider } from "@/Context/ThemeContext";
import NavigationMenu from "@/components/Navigation";


const ContactPage = () => {
    return (
      <ThemeProvider>
        <NavigationMenu/>
      <div className="h-screen flex flex-col  px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-center mb-8">
            Thank you for visiting! Whether you have inquiries, collaboration opportunities,
            or simply want to connect, feel free to reach out or connect with me on social media.
            I'm excited to engage with you and explore potential opportunities together.
          </p>
          {/* Add your contact form or social media links here */}
        </div>
      </div>
      </ThemeProvider>
    );
  };
  
  export default ContactPage;
  