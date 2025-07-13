import React, { useEffect } from 'react';

const CosmosWeek4: React.FC = () => {
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
            src="https://www.youtube.com/embed/axT0GRV12RU?si=e9hSxRMOpBvBV79c&autoplay=1&mute=1&loop=1&playlist=axT0GRV12RU&controls=0"
            title="COSMOS Week 4 Background Video"
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
          Robot picking up object!!!
        </div>
      </div>

      {/* Video text overlay */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Week 4</h1>
          <span className="text-xl md:text-2xl">7.26.24 - 7.21.24</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative bg-white pt-12">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Objective</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For our final week, I partnered with Anthony, and the task this week was to create anything we wanted.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Design Process</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Our initial idea was to create a robot arm that could manipulate objects, and if we had time, we would make it sort objects autonomously. However, after pitching our ideas, we shifted toward a gantry design, to increase the stability of the bot and make it easier to grab items. To pick up items, we decided on a set of rails to move the bot around and a claw mechanism connected to a rack and pinion.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img 
                  src="https://i.imgur.com/orb5vl5.png" 
                  alt="Initial arm design" 
                  className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="mt-2 text-gray-600">Initial arm design</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://i.imgur.com/pzTmPpu.png" 
                  alt="Gantry design" 
                  className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="mt-2 text-gray-600">Gantry design</p>
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 mt-8">
              <p>
                During our final project, Anthony and I both chose the tasks we were weaker in. I got to do most of the hardware while he was on the software. Over the week, he was able to program the controller to do all the different functions of the gantry.
              </p>
              <p>
                While Anthony was working on the controller, I got most of the hardware done. To ensure the bot could move along the rails, we took measurements of the motor connection and the thickness of the cardboard using a caliper. I was then able to CAD the wheels into two parts, to avoid using support material, and then 3D print them using Makerbot Method printers.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <img 
                  src="https://i.imgur.com/IfRD1hs.png" 
                  alt="Motor measurement" 
                  className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="mt-2 text-gray-600">Motor measurement</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://i.imgur.com/K2zKOlZ.png" 
                  alt="CAD of wheels" 
                  className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="mt-2 text-gray-600">CAD of wheels</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://i.imgur.com/YPPxfCG.png" 
                  alt="Method Printer printing wheels" 
                  className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="mt-2 text-gray-600">Method Printer printing wheels</p>
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 mt-8">
              <p>
                Once the wheels were able to move along the cardboard rails, we wanted to mount a platform on top to have a place to store the rack and pinion. Since the motor already had screw holes for mounting other attachments, we took the diameter and created another CAD model to 3D print so we could have a cardboard sheet on top of the motors.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <img 
                src="https://i.imgur.com/agjqQF0.png" 
                alt="CAD of motor attachment" 
                className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <p className="mt-2 text-gray-600">CAD of motor attachment</p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 mt-8">
              <p>
                The gripping mechanism had another two racks and pinions to open and close the claws. The CAD file was found online and after 3D printing, we attached a servo to grab items.
              </p>
              <p>
                After creating the platform and attaching the rack and pinion, the entire mechanism was a lot more unstable than expected, as there was only one point of contact and a lot of weight was placed on the rack. To help, we used rubber bands to somewhat fix the rack into place.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <img 
                src="https://i.imgur.com/m39Na0A.jpeg" 
                alt="Final design" 
                className="max-w-[40%] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <p className="mt-2 text-gray-600">Final design</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Overall, I'm happy that Anthony and I were able to create a working gantry. Though we never got to move left or right or incorporate a Picamera into the build, this project still pushed me and I ended this week with much more hardware knowledge than when I started.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CosmosWeek4; 