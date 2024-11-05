import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa'; // Import icons

const Projects = () => {

  const gitdata = (link) => {
    window.location.href = link;
  };

  const deploy = (link) => {
    window.location.href = link;
  };

  const projects = [
    {
      name: "Food Ordering Website",
      description: "A responsive food ordering website where users can browse menus, Built with React and Tailwind CSS.",
      image: "https://images.pexels.com/photos/29021173/pexels-photo-29021173/free-photo-of-delicious-italian-pizza-with-basil-at-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/mohitmasiwal/foodapp.git",
      deployed: "https://fabulous-otter-a82720.netlify.app/",
    },
    {
      name: "Recipe Application",
      description: "A recipe app showcasing different food recipes with detailed descriptions, ingredients, and instructions. Built using modern UI technologies.",
      image: "https://wallpapercave.com/wp/wp3724325.jpg",  
      github: "https://github.com/mohitmasiwal/fullstackfood.git",
      deployed: "https://stellular-raindrop-9d0e1d.netlify.app/",
    },
    {
      name: "Weather Application",
      description: "A weather app that provides current weather updates for various locations using live data from a weather API. Built with React and Tailwind CSS.",
      image: "https://img.freepik.com/free-vector/weather-mobile-app_23-2147552416.jpg?t=st=1729852824~exp=1729856424~hmac=ee237d58161d8b9473fb39990e415f717dc37fafabf2d1f53c76674e024eca22&w=740",
      github: "https://github.com/mohitmasiwal/weatherapp.git",
      deployed: "https://mohitmasiwal.netlify.app/",
    },
    {
      name: "Renting Clothes",
      description: "A platform for renting clothes, providing an extensive range of fashionable clothing options. Built with React and Tailwind CSS.",
      image: "https://c1.peakpx.com/wallpaper/573/909/315/store-clothes-clothing-line-fashion-wallpaper.jpg",
      github: "https://github.com/mohitmasiwal/rentalcloths.git",
      deployed: "https://rococo-banoffee-299a35.netlify.app",
    }
  ];

  return (
    <div className="px-4 py-10  bg-gray-900">
      <h1 className="text-3xl  font-bold text-center text-gray-200 mb-10">Projects</h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="  bg-gray-800  w-96 mx-auto rounded-lg overflow-hidden   hover:scale-105  ">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">{project.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
              <div className="flex justify-between items-center mb-6">
                {/* Icons for technologies */}
                <div className="flex space-x-2">
                  <FaHtml5 className="text-red-600" size={24} />
                  <FaCss3Alt className="text-blue-500" size={24} />
                  <FaReact className="text-blue-400" size={24} />
                  <FaJsSquare className="text-yellow-400" size={24} />
                </div>
              </div>
              {/* Buttons */}
              <div className="flex justify-between">
                <button 
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" 
                  onClick={() => gitdata(project.github)}
                >
                  GitHub
                </button>
                <button 
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                  onClick={() => deploy(project.deployed)}
                >
                  Deployed
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mt-12">
        And many more projects!
      </h1>
    </div>
  );
};

export default Projects;
