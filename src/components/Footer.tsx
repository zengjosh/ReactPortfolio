import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <ul className="flex space-x-6 mb-4">
            <li>
              <a 
                href="https://github.com/zengjosh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/josh-zeng-a7107a273/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a 
                href="https://leetcode.com/u/OhnURcRYW2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="HackerRank"
              >
                <Code size={24} />
              </a>
            </li>
          </ul>
          <p className="text-gray-400">&copy; Copyright 2024-2025 Josh Zeng</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;