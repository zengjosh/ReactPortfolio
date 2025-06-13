import React, { useEffect } from 'react';
import { Github } from 'lucide-react';

const SkyblockItemLogger: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Skyblock Item Logger <span className="text-2xl text-gray-600">Summer 2024</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Playing Hypixel Skyblock, I often find myself in a deficit of money. Without hours and hours every day, it would be almost impossible to progress in the game. To help address this problem, I created a program to try and log the price history of an item.
            </p>

            <p className="text-gray-600 mb-6">
              To grab the current price of an item from the game, I needed an API key from Hypixel's Developer dashboard. To use this key safely I stored it locally as an environmental variable. I referenced that variable whenever I needed to make a request for the current buy and sell price for an item called Stack of Stonks. To gather the data at consistent intervals, I created another script to run the previous script (datalog.py) every two minutes with Python's schedule library. After letting the script run for a few hours and getting the needed data, I was able to graph the price against the time of both the buying and selling orders with MatPlotLib.
            </p>

            <p className="text-gray-600 mb-6">
              I used GitHub Actions to run the script every five minutes to automate the data logging process externally instead of on my machine. This setup required configuring a GitHub API token with the necessary permissions to push updates to the main branch of my repository. Since the key and token could not be stored locally to ensure security, both the Hypixel API key and the GitHub API token were stored as repository secrets. Next, I created a script inside the workflow folder to specify the action's name, schedule, and job, which was to run the datalog.py script every five minutes.
            </p>

            <p className="text-gray-600 mb-6">
              This project introduced me to the basics of using API keys and their functionality, as well as experience with GitHub Actions, and how to implement cron jobs and maintain information security. Overall, this project helped me develop my skills in programming and automation.
            </p>

            <h3 className="text-xl font-semibold mb-3">Repository</h3>
            <a
              href="https://github.com/zengjosh/sbDataLogger"
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
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Analysis</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">API Integration</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">GitHub Actions</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Automation</span>
            </div>

            <div className="mt-8">
              <img 
                src="https://i.imgur.com/jldOwY1.png" 
                alt="Stack of Stonks price graph" 
                className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkyblockItemLogger; 