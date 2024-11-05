import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaTools, FaFileAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white hover:text-gray-400">Mohit Masiwal</h1>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </div>

        {/* Navigation Links (Hidden on small screens, visible on medium and up) */}
        <ul className="hidden md:flex space-x-8 justify-center items-center text-white">
          <li>
            <Link to="/" className="text-xl hover:text-gray-400 flex items-center">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl hover:text-gray-400 flex items-center">
              <FaUser className="mr-2" /> About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-xl hover:text-gray-400 flex items-center">
              <FaBriefcase className="mr-2" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-xl hover:text-gray-400 flex items-center">
              <FaTools className="mr-2" /> Skills
            </Link>
          </li>
          
          <li>
            <Link to="/contact" className="text-xl hover:text-gray-400 flex items-center">
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Visible when hamburger icon is clicked) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-white">
          <li>
            <Link to="/" className="text-xl hover:text-gray-400 flex items-center" onClick={toggleMenu}>
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl hover:text-gray-400 flex items-center" onClick={toggleMenu}>
              <FaUser className="mr-2" /> About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-xl hover:text-gray-400 flex items-center" onClick={toggleMenu}>
              <FaBriefcase className="mr-2" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-xl hover:text-gray-400 flex items-center" onClick={toggleMenu}>
              <FaTools className="mr-2" /> Skills
            </Link>
          </li>
           
          <li>
            <Link to="/contact" className="text-xl hover:text-gray-400 flex items-center" onClick={toggleMenu}>
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
