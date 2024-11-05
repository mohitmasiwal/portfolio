import React from 'react';
import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';  
import Aboutme from './Aboutme';
import Skills from './Skills';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row  justify-evenly items-center h-screen bg-gray-800 px-6">
    
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Hello, It's Me
        </h1>
        <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
          Mohit Masiwal
        </h1>
        <h1 className="text-2xl text-gray-700 dark:text-gray-400">
          and I am a{' '}
          <span className="text-blue-500 dark:text-blue-300">Frontend Developer</span>
        </h1>

        <div className="flex justify-center mt-6 space-x-4">
          <a href="https://www.linkedin.com/in/mohit-masiwal-0b08b1324" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 text-4xl" />
          </a>
          <a href="https://github.com/mohitmasiwal" target="_blank" rel="noreferrer">
            <FaGithub className="text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 text-4xl" />
          </a>
          <FaReact className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-500 text-4xl" />
        </div>
        <Resume />
      </div>

      <div className="flex justify-center pt-10">
        <img
          className="h-60 w-60 rounded-full border-4 hover:animate-bounce border-blue-500 dark:border-blue-700"
          src="/mohit.jpeg"
          alt="Mohit"
        />
      </div>
    </div>
    <Aboutme />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
};

export default Home;
