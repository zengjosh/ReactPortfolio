import React, { useEffect } from 'react';

const ChessAnalysis: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Chess Rating v. Number of Moves <span className="text-2xl text-gray-600">CSA 2023</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              This project had me analyze chess data from a{' '}
              <a href="https://www.kaggle.com/datasets/datasnaek/chess" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                dataset
              </a>{' '}
              found on Kaggle. Taking in the different columns and performing statistical calculations, I was able to create a scatterplot of the information and output information like the coefficient of determination, details of the line of best fit, and the number of data points used in the graph (20058). A{' '}
              <a href="https://docs.google.com/presentation/d/1oQojMJj1GDFc1-mER8uX_naYYebPB2pH4JCPVrZKB-8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                presentation
              </a>{' '}
              was also created documenting the design process and interpreted the information outputted. A brief conclusion from this project is that the average rating of a chess game will have almost no effect on the number of moves played.
            </p>
            
            <p className="text-gray-600 mb-6">
              To analyze the dataset and visualize the information, the dependencies for the project had to be updated. I used XChart for creating the scatterplot, Apache Commons Math for determining the statistics, and Sinbad for accessing the information from the CSV file.
            </p>

            <p className="text-gray-600 mb-6">
              If you want to view the code, here is the{' '}
              <a href="https://github.com/zengjosh/PLTW-3.7.7-DataLabA4/tree/main" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Github Repository
              </a>{' '}
              or{' '}
              <a href="https://replit.com/@JoshZeng/PLTW-377-Activity-4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Replit
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-3">Skills Used</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">XChart</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Apache Commons Math</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Sinbad</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Analysis</span>
            </div>

            <div className="mt-8">
              <img 
                src="https://i.imgur.com/uhGItrb.png" 
                alt="chess analysis image" 
                className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessAnalysis; 