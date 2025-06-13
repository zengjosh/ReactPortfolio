import React, { useEffect } from 'react';

const CosmosWeek1: React.FC = () => {
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
            src="https://www.youtube.com/embed/4-0PTO69_aI?start=13&autoplay=1&mute=1&loop=1&playlist=4-0PTO69_aI&controls=0"
            title="COSMOS Week 1 Background Video"
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
      </div>

      {/* Video text overlay */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Week 1</h1>
          <span className="text-xl md:text-2xl">7.8.24 - 7.12.24</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative bg-white pt-12">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Objective</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In the first week, we were tasked, in teams of two, to create a remote-controlled robot capable of popping balloons using weapons made from two 180-degree servos. The chassis and some sample code were the only information provided; the rest was up to us to decide, with the only requirement being that the robot had to fit within the provided size limit. The end goal was to create a robot that would be the last standing in a balloon-popping competition against the class.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Design Process</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                I was paired with Juha. On the first day, I was able to connect the Raspberry Pi to the network and install the required packages while she built the chassis. We worked together on connecting the Raspberry Pi to the motor drivers and successfully got them moving.
              </p>
              <p>
                The next couple of days were spent coding and debugging, trying to get the robot to respond to stick and button keystrokes on a game controller. Detecting whether a key was pressed was simple, but determining when the key was held had us stumped for a while. This meant that with our current code, the only way to move the robot was to spam the stick keys. Rather than perfecting movement, we continued onward to the servos and started weapon design.
              </p>
              <p>
                The servos required a PWM driver, which we added to the breadboard. The top buttons on the left and right sides of the controllers were programmed to turn the servos. After brainstorming countless weapon ideas, we decided on a pincer attack, checking our criteria for simplicity and effectiveness at popping balloons.
              </p>
              <p>
                Since I had done most of the coding up to this point, Juha and I swapped roles: I began designing the weapons we planned, while she worked on creating features for the unused buttons and figuring out the enigma of holding a button to move. Having almost no experience with actual hardware or physics, I was completely lost. In the process of designing weapons, I created unstable arms that were overly large and threw off the center of mass. Luckily, while testing, we caught these errors and fixed them by readjusting the placement of the breadboard, batteries, and portable charger.
              </p>
              <p>
                As Friday, the competition day, approached, more and more features began appearing, including the long-awaited hold-to-move feature. This resulted in our robot taking on a distinct look, covered with black electrical tape and blue masking tape. Forced to choose a team name, and due to our lack of creativity, we settled on the name <i>Tapebot</i>.
              </p>
            </div>

            <div className="mt-12">
              <img 
                src="https://i.imgur.com/1ToiZjd.jpeg" 
                alt="Tapebot" 
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Parts</h2>
            
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://i.imgur.com/RfPv468.jpeg" 
                    alt="Controller" 
                    className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-lg text-gray-700">
                    Controller used to drive the robot. The left side are the stick keys and the right and top parts are the button keys. The stick keys moved the robot, the top buttons controlled the servos, and the side buttons allowed the robot to turn left and right but backward.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://i.imgur.com/5lYoQA2.png" 
                    alt="Motor Driver" 
                    className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-lg text-gray-700">
                    Motor driver with the wires connected to move around the robot. The map is also shown which describes the different parts each wire will connect to.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://i.imgur.com/YhRiifz.jpeg" 
                    alt="PWM Driver" 
                    className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-lg text-gray-700">
                    PWM Driver that is used to control the servos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This project introduced many firsts for me. This was my first time working with a Raspberry Pi, my first time using motor and PWM drivers, and my first time using a Linux-based operating system. I had almost zero prior knowledge, with the exception of programming, but by the end of the week, I'd started feeling comfortable with navigating around Linux, understanding the new libraries needed for the RPi, and grasped a basic understanding of the components I was working with.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CosmosWeek1;