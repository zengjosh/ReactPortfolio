import React from 'react';

const ResumePage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4">
          <div className="aspect-[8.5/11] w-full">
            <iframe
              src="https://drive.google.com/file/d/151JYtJGhAbwM9mgsybyLYB0TgjM56FZN/preview"
              className="w-full h-full border-0"
              allow="autoplay"
              title="Resume PDF"
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-6 text-center">
          <a
            href="https://drive.google.com/file/d/151JYtJGhAbwM9mgsybyLYB0TgjM56FZN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;