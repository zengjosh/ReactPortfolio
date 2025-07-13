import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const Neurochess: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Neurochess <span className="text-2xl text-gray-600">2024-2025</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <a 
                href="https://neurochess.online/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Neurochess
              </a> is a web app I helped develop with a team of three of my friends, originally designed to support individuals with ADHD. Over time, we expanded it to benefit a broader audience by combining chess education with interactive analysis and cognitive feedback. The platform features educational chess videos created by one of our teammates, a Chess International Arena Grandmaster, and Neural AI that provides feedback based on moves and analysis using Stockfish, an open-source chess engine.
            </p>

            <p className="text-gray-600 mb-6">
              The educational chess videos were posted on YouTube and Loom, and embedded onto our website for easier accessibility. I used TypeScript interfaces to store unique video information like title, category, and platform, allowing users to sort videos by chess openings, middlegames, or endgames.
            </p>

            <p className="text-gray-600 mb-6">
              To ensure a smoother user experience across devices, I implemented a responsive design through Tailwind CSS. The layout dynamically adapts to screen size: on wider screens, it displays a traditional horizontal navigation bar, while on smaller devices, it switches to a compact mobile interface with a "Menu" button that reveals a dropdown list of navigation links. This was done by conditionally rendering elements based on the viewport width. The result was a more friendly site that preserved full functionality and accessibility regardless of device.
            </p>

            <p className="text-gray-600 mb-6">
              The Neural AI page takes in a chess PGN, a text-based format for storing chess games. I created a parser function to clean and extract metadata including player names, ELO ratings, date, time control, and the game result. Missing fields were handled by defaulting to "N/A" on the site. I then used npm's react-chessboard component to visualize games, allowing users to flip the board and cycle through moves interactively.
            </p>

            <p className="text-gray-600 mb-6">
              Initially, I implemented stockfish.wasm on the client side to keep the app entirely free to run. However, because it ran entirely in-browser, performance was poor; it could take up to a minute to return a single evaluation. To improve this, I replaced it with a POST request to chess-api.com, which returned evaluations instantly while remaining free under our usage level. This significantly improved user experience without adding hosting costs.
            </p>

            <p className="text-gray-600 mb-6">
              From the PGN file and Stockfish analysis, we generated neural insights (still under development), or predictions, to give users feedback in four categories:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Pattern Recognition - based on how closely user openings matched known opening lines from a JSON file</li>
              <li>Problem-Solving - based on the changes in Stockfish's rating</li>
              <li>Strategic Planning - determined by unique pieces used</li>
              <li>Working Memory - based on the depth of the game or the total number of moves</li>
            </ul>

            <p className="text-gray-600 mb-6">
              All four were calculated using algorithmic thresholds and heuristics with no machine learning being involved.
            </p>

            <p className="text-gray-600 mb-6">
              To provide feedback on specific moves, we integrated Google Gemini. Since Gemini's free tier had rate limits, I designed a compact prompt that included the FEN position, the move played, the initial and final Stockfish evaluations, and the change in evaluation. This allowed Gemini to classify the move as good, bad, or neutral and explain its strategic or tactical value in just 1–2 sentences. To maintain responsiveness, I added skeleton-loading UI elements while waiting for API responses.
            </p>

            <p className="text-gray-600 mb-6">
              We used GitHub for version control and hosted the app on Vercel. API keys for both chess-api and Gemini were stored securely as environment variables to protect sensitive information. Thanks to efficient API usage and relatively low traffic, the entire project remained within the free tier of all tools used.
            </p>

            <h3 className="text-xl font-semibold mb-3">Skills Used</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Web Development</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">API Integration</span>
            </div>

            <h3 className="text-xl font-semibold mb-3">Project Demo</h3>
            <div className="mt-8 relative overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
              <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <iframe 
                  className="w-full h-full rounded-lg shadow-md"
                  style={{ pointerEvents: 'auto' }}
                  src="https://www.youtube.com/embed/v3VX4yZRSHA?si=ePxWXgFYLfPAFuqu"
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

export default Neurochess; 