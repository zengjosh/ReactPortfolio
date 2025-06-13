import React, { useEffect } from 'react';

const SnakeGame: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Educational Snake Game <span className="text-2xl text-gray-600">CSA 2023</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              In 2023, I and three others created a snake game based on East Asia geography. The background features a map of East Asia and four dots randomly spawn on the counties. The top of the screen displays the name of a country and the user has to navigate the snake to one of the dots. If the correct dot is eaten, the user's points increase by one and the four dots switch positions. If an incorrect dot is eaten, the player's lives are decreased by one and no points are gains. The dots still change positions.
            </p>
            <p className="text-gray-600 mb-6">
              In this project, I worked on the methods that spawned the dots in random locations, checked whether the snake was touching the dot, and displayed the current country on top of the screen.
            </p>

            <h3 className="text-xl font-semibold mb-3">Github Repository</h3>
            <p className="text-gray-600 mb-6">
              If you want to try the game yourself, here is the <a href="https://github.com/zengjosh/EducationalSnakeGame2023/tree/main" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Github Repository</a>
            </p>

            <h3 className="text-xl font-semibold mb-3">Skills Used</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Object-Oriented Programming</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Algorithms</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Greenfoot</span>
            </div>

            <h3 className="text-xl font-semibold mb-3">Project Video</h3>
            <div className="mt-8 relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/2QblpNvy2tk"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame; 