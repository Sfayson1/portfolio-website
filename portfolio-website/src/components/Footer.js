import SocialLinks from "./socialLinks";

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="flex justify-center items-center space-x-4">
      <SocialLinks/>
      </div>
      <p className="text-center mt-4">
        &copy; {new Date().getFullYear()} Your Website Name. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
