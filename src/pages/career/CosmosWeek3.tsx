import React, { useEffect } from 'react';

const CosmosWeek3: React.FC = () => {
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
            src="https://www.youtube.com/embed/GQFVGmlrqjU?si=CLGLWj9erVUGIQsX&autoplay=1&mute=1&loop=1&playlist=GQFVGmlrqjU&controls=0"
            title="COSMOS Week 3 Background Video"
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
          Robot refusing to move :(
        </div>
      </div>

      {/* Video text overlay */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Week 3</h1>
          <span className="text-xl md:text-2xl">7.22.24 - 7.25.24</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative bg-white pt-12">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Objective</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For the third week, I partnered with Marina and our goal was to create a robot that could move with a maximum of four 180-degree servos. The goal was to have the robot complete a ten-foot track in the shortest amount of time.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Design Process</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                We began by brainstorming possible designs the robot could take on, and after about thirty minutes decided on a three-legged robot. The idea was to have two legs with one servo each and the third leg with a joint in the middle requiring two servos. The body would be made of styrofoam and would hold the breadboard, PWM drivers, Raspberry Pi, batteries, and servos, and the legs would be made of acrylic and laser cut.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <img 
                src="https://i.imgur.com/SEEgwfb.jpeg" 
                alt="Legged robot brainstorm" 
                className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <p className="mt-2 text-gray-600">Legged robot brainstorm</p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 mt-8">
              <p>
                On the very first day, we faced servo problems. There would always be at least one stubborn servo refusing to move, and after the majority of our lab time, we got all four servos working, The next day, upon arrival, the servos stopped working again, and after more hours of debugging, new servos, and a new Raspberry Pi, everything seemed to work again. However, the next day of lab again saw the servos stop working. Basically, throughout this entire project, it was very rare to see all four servos working.
              </p>
              <p>
                Focusing on the development process excluding servos, we first tried using a game controller to move the robot around but later switched to fully hard-coded movement. Marina was able to make rough cardboard prototypes and I was able to CAD everything in Onshape and get it laser-cut.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <img 
                  src="https://i.imgur.com/4c8mzLh.jpeg" 
                  alt="Cardboard prototypes" 
                  className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="mt-2 text-gray-600">Cardboard prototypes</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://i.imgur.com/eX89X3L.png" 
                  alt="CAD of legs" 
                  className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="mt-2 text-gray-600">CAD of legs</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://i.imgur.com/hR5DTV6.jpeg" 
                  alt="Acrylic laser cut" 
                  className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="mt-2 text-gray-600">Laser-cut acrylic</p>
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 mt-8">
              <p>
                On the day of the competition, Thursday this time, we had just begun assembling the robot, and after spending hours doing modifications and positioning the different parts, started our first trial, which completely failed. Though we tried many many modifications to both the hardware and software, we were unfortunately unable to get the robot to move forward.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <img 
                src="https://i.imgur.com/eHYnRRe.jpeg" 
                alt="Robot that isn't moving" 
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <p className="mt-2 text-gray-600">Robot that isn't moving</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In retrospect, it's easy to determine the flaws in our development process over the week. We glossed over brainstorming and ended up constructing a robot that we knew might not move. We also planned an extremely complex robot rather than taking a more simplistic approach, which was over-ambitious as we both had never taken a physics course, meaning that for any of the movement problems that occurred, we were completely lost. On the day of the competition, we actually had a working iteration, but rather than testing it, we kept trying to smooth out the finer details, and once the time was up, the robot stopped being able to move.
              <br /><br />
              Though there were many missteps, this week also remains a valuable learning experience. It exposed me to CAD, laser-cutting, and a tiny bit of physics. It has also shown me my limits, the importance of having a coherent plan before development, and, like last week, the importance of time management.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Tapeball</h2>
            <div className="flex flex-col items-center">
              <img 
                src="https://i.imgur.com/exZlDVL.jpeg" 
                alt="Cope for bad robot" 
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <p className="mt-4 text-lg text-gray-700 italic">
                "Our robot may not have walked but at least we have a tapeball"
                <br />
                -Marina
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CosmosWeek3; 