import React, { useEffect } from 'react';

const PolkaDotGame: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Polka Dot Game <span className="text-2xl text-gray-600">CSP 2023</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              In 2023, I developed a game heavily inspired by the Polka Dot Game. In this game, players control a dot and consume smaller dots to gain points. However, contact with larger dots results in the game ending, along with a display of the player's dot consumption stats.
            </p>

            <p className="text-gray-600 mb-6">
              Additionally, I made a difficulty selection feature, offering players a choice between three levels: easy, medium, or hard. The system restricts input to these three options, ensuring that the user interaction won't break the game.
            </p>

            <p className="text-gray-600 mb-6">
              The player-controlled dot dynamically follows the cursor, enhancing user engagement, and the other dots cease movement and are removed once they exit the user's screen. This optimization minimizes resource consumption during gameplay.
            </p>

            <h3 className="text-xl font-semibold mb-3">Skills Used</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Pygame</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Game Development</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Object-Oriented Programming</span>
            </div>

            <h3 className="text-xl font-semibold mb-3">Game Demo</h3>
            <div className="mt-8 relative overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
              <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <iframe 
                  className="w-full h-full rounded-lg shadow-md"
                  style={{ pointerEvents: 'auto' }}
                  src="https://www.youtube.com/embed/n0cZOY_2MZk"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolkaDotGame; 