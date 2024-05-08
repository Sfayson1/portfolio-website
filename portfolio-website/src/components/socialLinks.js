import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links flex space-x-4 ">
      <a href="https://linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='h-10 w-10 m-2.5 ' />
      </a>
      <a href="https://github.com/Sfayson1" target="_blank" rel="noopener noreferrer">
        <FaGithub className='h-10 w-10 m-2.5' />
      </a>
    </div>
  );
};

export default SocialLinks;
