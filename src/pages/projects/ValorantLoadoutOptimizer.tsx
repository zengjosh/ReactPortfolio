import React, { useEffect } from 'react';
import { Github } from 'lucide-react';

const ValorantLoadoutOptimizer: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Valorant Loadout Optimizer <span className="text-2xl text-gray-600">CSA 2024</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              One of the many difficulties in Valorant is choosing the most optimal loadout to buy in any given round. When I play the game, I constantly question if what I'm buying is correct. To remove any doubt, I created this Python program where I can feed it a screenshot of my current game and it will output the best gun and amount of shields to buy.
            </p>

            <p className="text-gray-600 mb-6">
              To get this prediction software, a lot of data first was needed to make informed decisions. I spent hours watching VCT, or a Valorant esports series where pros played, collected hundreds of screenshots, and created a program that could extract the data from these images and add it all into a CSV. This process also required me to create two convolutional neural networks (CNN) to classify the gun and shield images that had no label on the VCT display. Finally, when all the data was collected, I made a multi-output neural network to predict the most optimal weapon and shield trained on the data from the CSV created.
            </p>

            <p className="text-gray-600 mb-6">
              This project saw many challenges, especially with source control. Since many of the models I created were too large for Github to store, I had to learn Github's extension Git LFS, or Git Large File Storage. I also had to research multi-output neural networks and CNNs to learn how to effectively use them and maximize their accuracy on unseen data. Overall, this project taught me better source control and deepened my understanding of how to use AI in Python.
            </p>

            <h3 className="text-xl font-semibold mb-3">Repository</h3>
            <a
              href="https://github.com/zengjosh/Valorant-Loadout-Optimizer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all w-fit"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>

            <h3 className="text-xl font-semibold mb-3 mt-8">Skills Used</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Analysis</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Computer Vision</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Git LFS</span>
            </div>

            <h3 className="text-xl font-semibold mb-3">Project Presentation</h3>
            <div className="mt-8 relative overflow-hidden" style={{ paddingBottom: '59.27%', height: 0 }}>
              <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <iframe 
                  className="w-full h-full rounded-lg shadow-md"
                  style={{ pointerEvents: 'auto' }}
                  src="https://docs.google.com/presentation/d/e/2PACX-1vQ41iPCNAgu2bdfmwAQrEExsXzX5oC-G9ObMORWE4DRfc0WX3xvTUS4GTdu1JOR5zTyFrw2iVTlB4a8/embed?start=false&loop=true&delayms=5000"
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

export default ValorantLoadoutOptimizer; 