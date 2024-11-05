import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10">
       
       
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-10">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          About Me
        </h1>

        {/* Description */}
        <p className=" md:text-2xl lg:text-2xl text-gray-700 dark:text-white max-w-3xl mb-8">
          Hello, I'm <span className="text-blue-600 dark:text-blue-400 font-bold">Mohit Masiwal</span>, a passionate
          Front-End Developer with a strong knowledge of HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS. I love
          building responsive, user-friendly web applications that provide great experiences on any device. With my
          expertise, I aim to bring creative designs to life through clean code and best practices. Additionally, I am 
          involved in <span className="text-blue-600 dark:text-blue-400 font-bold">IoT (Internet of Things)</span>, 
          exploring innovative solutions and integrating technology into everyday objects.
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Education
        </h2>
        <ul className="text-lg md:text-xl text-gray-700 dark:text-white">
          <li className="mb-2">
            <strong>B.Tech (2022 - 2025)</strong> - Expected graduation in 2025
          </li>
          <li className="mb-2">
            <strong>Polytechnic (2020 - 2022)</strong> - 70%
          </li>
          <li className="mb-2">
            <strong>12th Grade (2019)</strong> - Doon Modern Academy, 70%
          </li>
          <li>
            <strong>10th Grade (2017)</strong> - Doon Modern Academy, 83%
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
