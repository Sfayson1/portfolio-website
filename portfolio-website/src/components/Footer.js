import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex items-center justify-center px-4 py-2 ">
        <FaLinkedin />
        <FaGithub />
      </div>
      <div className="container">
        <p className="p-4 text-center light">&copy; 2024 Your Website Name</p>
      </div>
    </footer>
  );
};

export default Footer;
