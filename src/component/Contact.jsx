import React from 'react';
import { FaLinkedin,FaGithub, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-6 dark:text-gray-100">Contact Me</h1>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-indigo-500" size={24} />
          <a href="mailto:your-email@example.com" className="text-lg dark:text-gray-300 hover:text-indigo-400">
            mohitnasiwal02@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-indigo-500" size={24} />
          <span className="text-lg dark:text-gray-300">+91 9548677900</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-indigo-500" size={24} />
          <a
            href="https://www.linkedin.com/in/mohit-masiwal-0b08b1324"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg dark:text-gray-300 hover:text-indigo-400"
          >
            LinkedIn 
          </a>
          
        </div>
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-indigo-500" size={24} />
          <a
            href="https://www.linkedin.com/in/mohit-masiwal-0b08b1324"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg dark:text-gray-300 hover:text-indigo-400"
          >
            LinkedIn 
          </a>
          
        </div>
         
        <div className="flex items-center space-x-2">
          < FaGithub className="text-indigo-500" size={24} />
          <a
            href="https://github.com/mohitmasiwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg dark:text-gray-300 hover:text-indigo-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
