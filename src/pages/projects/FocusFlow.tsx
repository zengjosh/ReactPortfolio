import React, { useEffect } from 'react';

const FocusFlow: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">FocusFlow <span className="text-2xl text-gray-600">2024</span></h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              A friend mentioned his interest in Tetris and got me into it so decided to make <a 
                href="https://focusflow.us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                FocusFlow
              </a>, an online Tetris game that would be available from almost anywhere.
            </p>

            <p className="text-gray-600 mb-6">
              This is my first closed-source project, partly because I wanted to learn how to implement security measures to protect my work, but also because many of my friends are gatekeeping information about college applications, and I too wanted something exclusive.
            </p>

            <p className="text-gray-600 mb-6">
              In addition to coding the game itself, which consisted of over a thousand lines of JavaScript and many hours spent tweaking the CSS, I had to ensure the code wasn't publicly available. Initially, I thought that simply making the GitHub repository private would be sufficient, but then I realized that all the files were accessible through the source tab via the inspect tool. I also knew I couldn't have a backend for the project, or Vercel would start charging fees and imposing limits, so I found the best option possible for my criteria: obfuscating the important code. This required me to set up Next.js on top of the HTML, CSS, and JavaScript I already had. By bundling the code with Terser and using Webpack Obfuscator, I was able to make the JavaScript displayed in the source tab appear completely jumbled while maintaining the functionality of the game.
            </p>

            <p className="text-gray-600 mb-6">
              In this project, I also attempted to implement a login system. I initially experimented with Google Sheets but realized that logistical challenges could affect the app later if it ever gained users, given the API's limit of only 300 requests per minute. Then I found Google Firebase, which offers a dedicated database. Since its free account rates were generous—50k reads and 20k writes per day—I decided it made sense to implement a leaderboard as well. Using mostly sample code, I was able to link Firebase with my site. After stress-testing the website, I realized that each login would use one read, and each game played would result in another read due to the leaderboard display. This meant fewer than 50,000 games could be played daily, so some optimization was needed. I decided that the easiest way to reduce the read count was to cache the leaderboard and only read from the database if the player achieved a new high score, which was also cached. This solution mostly addressed the issue, as the site isn't likely to receive excessive traffic, and new high scores were relatively rare.
            </p>

            <p className="text-gray-600 mb-6">
              I also worked on the search engine optimization (SEO) aspect of web development, aiming to make the website more visible and rank higher on Google. I started with standard suggestions like adding a meta description, favicon, title, keywords, and a canonical URL. With further research, however, I discovered additional enhancements, such as the Open Graph Protocol, which provided an image preview of the site when shared on social media; schema markup, which helped search engines understand the page better; and a robots.txt file for selective indexing. I also improved the loading time by converting all images to WebP and using Vercel's CDN. Other pre-existing features, like bundling, also contributed. This page itself is also aiding SEO through the added backlink.
            </p>

            <p className="text-gray-600 mb-6">
              This extensive project taught me a lot and helped me further develop skills I had already acquired. Working on CSS animations, designing appealing UIs, and handling edge cases, such as hard-dropping a tetromino during its grace period, all helped me grow as a developer and consider more scenarios. Implementing security was completely new to me, but as a result of this project, I familiarized myself with tools I may potentially use in the future. The foray into SEO was valuable, as it helped me understand how to boost visibility with a raw GitHub repository instead of relying on a website editor. Ultimately, I'm glad I was able to create a fully functioning Tetris game that both my friends and anyone on the internet can enjoy, all while gaining new skills and knowledge.
            </p>

            <h3 className="text-xl font-semibold mb-3">Skills Used</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Firebase</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Web Development</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Game Development</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SEO</span>
            </div>

            <h3 className="text-xl font-semibold mb-3">Project Demo</h3>
            <div className="mt-8 relative overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
              <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <iframe 
                  className="w-full h-full rounded-lg shadow-md"
                  style={{ pointerEvents: 'auto' }}
                  src="https://www.youtube.com/embed/WL_y1XK-sIQ"
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

export default FocusFlow; 