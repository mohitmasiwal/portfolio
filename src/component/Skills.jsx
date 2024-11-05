import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10 pt-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        My Skills
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Skill Icons */}
        {[
          { icon: <FaHtml5 className="text-orange-600 text-7xl" />, label: 'HTML5' },
          { icon: <FaCss3Alt className="text-blue-600 text-7xl" />, label: 'CSS3' },
          { icon: <FaJs className="text-yellow-500 text-7xl" />, label: 'JavaScript' },
          { icon: <FaBootstrap className="text-purple-600 text-7xl" />, label: 'Bootstrap' },
          { icon: <FaReact className="text-blue-400 text-7xl" />, label: 'React' },
          { icon: <SiTailwindcss className="text-blue-600 text-7xl" />, label: 'Tailwind CSS' },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition duration-300 transform p-4 rounded-lg border-4 border-transparent hover:border-blue-500 hover:shadow-lg hover:scale-110"
          >
            {skill.icon}
            <span className="text-lg text-gray-700 dark:text-gray-200 mt-2">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
