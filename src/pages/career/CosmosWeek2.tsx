import React, { useEffect } from 'react';

const CosmosWeek2: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const videoContainer = document.getElementById('video-container');
      if (videoContainer) {
        const scrolled = window.scrollY;
        videoContainer.style.transform = `translateY(${scrolled * -0.75}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video container with scroll effect */}
      <div 
        id="video-container" 
        className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none"
      >
        <div id="video" className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/ptJFH-Sho1w?si=ozIhnCZa9mbDuUCK&autoplay=1&mute=1&loop=1&playlist=ptJFH-Sho1w&controls=0"
            title="COSMOS Week 2 Background Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
            style={{
              width: '100vw',
              height: '56.25vw', /* 16:9 Aspect Ratio */
              minHeight: '100vh',
              minWidth: '177.77vh', /* 16:9 Aspect Ratio */
            }}
          />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-medium bg-black bg-opacity-50 px-4 py-2 rounded">
          Robot finishing the maze!
        </div>
      </div>

      {/* Video text overlay */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Week 2</h1>
          <span className="text-xl md:text-2xl">7.15.24 - 7.19.24</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative bg-white pt-12">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Objective</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In the second week, I was paired with someone new, Amelie. Our task for the week was to create a robot that can navigate a maze solely on an RPi Camera and Post-It notes to guide it. The parts remained the same except for the addition of the camera.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Design Process</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Our week started with a lecture on computer vision, which included the different image types, how we could process an image to keep only the important details, and the libraries that we would be using.
              </p>
              <p>
                Upon arriving at the lab, I started on the software while Amelie worked on the wiring. I added a proportional control feature to have the robot always center on the Post-It and created a function that would be used to process every frame the robot takes so that in most circumstances, only the Post-Its would show up in the final binary image.
              </p>
              <p>
                When brainstorming, we first agreed that having our robot recognize the arrows would be the easiest way to approach the problem. To do this, we decided to try transfer learning by feeding MobileNet, an existing network, images of labeled arrows that were pointing either up, down, left, or right. Though the model performed well, with its accuracy hovering around 87%, it wasn't able to be transferred to the Raspberry Pi, as all the libraries that supported it weren't able to be installed.
              </p>
              <p>
                Up to this point, I had done almost all the software so we switched roles. I would start on the documentation while Amelie worked on a new method to get the robot through the maze. Our second idea was to move based on color, so she started finding the HSV values for masking.
              </p>
              <p>
                On the day of the competition, Friday, none of the code was working and our robot was unable to move. I was too focused on trying to get the necessary libraries installed for the neural network and the color masking was also nowhere near complete. We had no idea where to start and were mere hours away from showing off the work we had done for the week.
              </p>
              <p>
                On the verge of giving up, we were saved by our co-instructor, Jonathan! He somehow deciphered through the walls of code, got the masking to work, and took the project to a more simplified approach. Instead of masking two colors, we would only mask one, and instead of figuring out which direction to turn based on the color, we would follow a singular line of pink. Minutes before our turn to run the maze, our robot was miraculously able to follow the notes.
              </p>
            </div>

            <div className="mt-12">
              <img 
                src="https://i.imgur.com/Wa3b3jl.png" 
                alt="Maze Robot" 
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This week I learned the important lesson of focusing on the essential parts of a project first before moving on to the unnecessary parts. It also reminded me of the importance of creating a timeline and planning through the entire project before starting, especially if there is a short time limit placed on me. For technical knowledge, I was introduced to using a camera to guide a robot and processing images to remove unimportant information. Attached is also the documentation for a more in-depth design process.
            </p>
          </section>

          <section className="mb-16">
            <div className="w-full">
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vQk_SZa8iUnDmjZ3ncZMcQ1FANWIE3u6d0xIByrtjz9wLz1uwz6MdMedteq7DCfh08GmZ4m_ChbnPdp/pub?embedded=true"
                className="w-full h-[600px] rounded-lg shadow-xl"
                style={{ border: 'none' }}
                title="Week 2 Documentation"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CosmosWeek2; 