import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LSTMFinancialModel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      url: 'https://i.imgur.com/yrBCJvi.png',
      alt: 'LSTM Predictions'
    },
    {
      url: 'https://i.imgur.com/yJ20K4L.png',
      alt: 'LSTM Loss'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">LSTM NVDA Model <span className="text-2xl text-gray-600">2024</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              A deep learning project exploring stock price prediction using LSTM networks. This project combines financial data analysis with natural language processing to predict NVIDIA stock prices, incorporating both technical indicators and sentiment analysis from news articles.
            </p>
            
            <p className="text-gray-600 mb-6">
              I recently got deeper into investing and decided that I wanted to pair it with machine learning, which began my exploration into the problem of predicting future data. This time, instead of using Tensorflow, which is what I had solely been using previously, I decided to branch out and use PyTorch.
            </p>

            <p className="text-gray-600 mb-6">
              To get the data needed for these models, I first targeted a stock with lots of news articles around it, as I wanted to utilize sentiment, and landed upon Nvidia. However, I could not find any datasets available that had both Nvidia's price history and the sentiment around it, so I had to create my own. You can find the dataset I created{' '}
              <a href="https://www.kaggle.com/datasets/grap510/september-2024-nvda-minute-data-with-sentiment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                here on Kaggle
              </a>.
            </p>

            <p className="text-gray-600 mb-6">
              To grab Nvidia's stock prices by minute, I used yfinance, a Python library by Yahoo that would give me the data from the last five days. To get the sentiment, I used Selenium to scrape Yahoo Finance's NVDA page for the most recent news articles and ran a cronjob for that script every three minutes on a Raspberry Pi. Once getting the exact time and headline of the article, I used ProsusAI Finbert from Hugging Face, a financial sentiment model that would return whether a string of words was positive or negative in the form of numbers ranging from -1 to 1.
            </p>

            <p className="text-gray-600 mb-6">
              After getting the data, I used Pandas Technical Analysis library on Python to grab indicators from the financial data given by yfinance, and shifted the data to create lagged indicators so the model would not be able to access future data.
            </p>

            <p className="text-gray-600 mb-6">
              I began with Gated Recurrent Units (GRU) a type of Recurrent Neural Network because the name sounded pretty cool, but quickly realized the model would not be good enough. I was set on gathering all the data myself, and by the time I had finished the model, I had only acquired about two days' worth of data. This meant that the initial error was extremely high, and comparing it with my baseline model of predicting the previous closing price, I found that I had a long way to go.
            </p>

            <p className="text-gray-600 mb-6">
              However, I was impatient and didn't want to wait another month to test again, so I experimented with more models. This time though, I decided to do a Long Short-Term Memory (LSTM) model and test if it would better capture trends. Though it performed better than the GRU model, likely due to the extra data it had, it was still barely above the 50% directional accuracy threshold.
            </p>

            <p className="text-gray-600 mb-6">
              To optimize other parts of the model while waiting for more data, I used Optuna, a library that would find better hyperparameters instead of hard coding arbitrary values. At first, this raised the accuracy to 90%, which I was ecstatic about, but upon testing on unseen data, that quickly dropped back down to around 50%, meaning the model I had was overfitting.
            </p>

            <p className="text-gray-600 mb-6">
              Now, even with almost a month of data, everything I've tried failed to raise the accuracy, and I've deemed it a lost cause. I did learn a lot from this project though, like how PyTorch differs from Tensorflow, how Recurrent Neural Networks work, and the difficulties of predicting future events.
            </p>

            <h3 className="text-xl font-semibold mb-3">Skills Used</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PyTorch</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">LSTM Networks</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">GRU Networks</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Optuna</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Pandas</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Pandas TA</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">yfinance</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Selenium</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ProsusAI Finbert</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Raspberry Pi</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Machine Learning</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Analysis</span>
            </div>

            <div className="mt-8 relative">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={images[currentSlide].url}
                  alt={images[currentSlide].alt}
                  className="w-full h-full object-contain bg-white"
                />
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LSTMFinancialModel; 