import React, { useEffect } from 'react';
import { Github, FileText, Presentation } from 'lucide-react';

const StocAIPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="aspect-video relative">
            <img
              src="https://i.imgur.com/EKxPUG2.jpeg"
              alt="STOC AI Device"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-end gap-4 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold">STOC AI</h1>
                  <span className="text-xl font-medium bg-white/20 px-3 py-1 rounded-full mb-1">2025</span>
                </div>
                <p className="text-xl opacity-90">Portable Soil Carbon Prediction Device</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://github.com/zengjosh/STOCapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1fIm0MS8fgksT9DVQDN-9IS5otpZdiO5TynaP8DDJj_E/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <FileText size={20} />
            <span>Documentation</span>
          </a>
          <a
            href="https://docs.google.com/presentation/d/1ASHx7LlamsHe_9QzeVozQbcize6Yt-yWcPFJambmV3U/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <Presentation size={20} />
            <span>Presentation</span>
          </a>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                STOC AI is a low-cost, portable device designed to estimate total organic carbon (TOC) in soil using real-time sensor data and an onboard machine learning model. Built for field deployment without internet access, the system enables small-scale farmers, researchers, and land managers to assess soil health without the need for expensive laboratory testing.
              </p>
            </section>

            {/* My Contributions */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">My Contributions</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-4">
                <li>
                  Trained a LightGBM regression model using 20,000+ samples from the LUCAS Soil 2018 dataset, incorporating features such as pH, NPK levels, EC, and elevation. Used Optuna for hyperparameter tuning and stratified sampling to ensure the model generalized well across diverse soil conditions. The model achieved ~15% MAPE on unseen test data.
                </li>
                <li>
                  Programmed the Arduino Nano to gather soil data from pH, EC, and NPK sensors, which was transmitted via serial to a Raspberry Pi. The Pi ran the trained model locally to enable offline prediction and served as the backend for the mobile app.
                </li>
                <li>
                  Built a Node.js Express server on the Raspberry Pi that handled HTTP GET requests and triggered the Python-based LightGBM prediction script. Developed a React Native app with Expo Go, securely connected over a Tailscale VPN, to display real-time predictions based on live sensor input.
                </li>
                <li>
                  Managed all software components using GitHub, contributed a system flowchart via Lucidchart, and co-wrote our capstone documentation and presentation. The entire system was built for under $100, making it both scalable and accessible.
                </li>
              </ul>
            </section>

            {/* Impact & Outcome */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Impact & Outcome</h2>
              <p className="text-gray-700 leading-relaxed">
                The final prototype enables affordable TOC estimation in the field, replacing costly ($20,000+) lab-based dry combustion methods. Future improvements include U.S. soil testing, moisture/texture sensing, and broader field validation.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold mb-6">Technologies Used</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Hardware</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Arduino Nano</li>
                    <li>Raspberry Pi</li>
                    <li>NPK/pH/EC sensors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">ML & Data Science</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Python</li>
                    <li>LightGBM</li>
                    <li>Optuna</li>
                    <li>pandas</li>
                    <li>scikit-learn</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Backend</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Node.js</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">App Development</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>React Native</li>
                    <li>Expo Go</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Networking</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Tailscale (VPN)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Collaboration</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>GitHub</li>
                    <li>Lucidchart</li>
                    <li>Google Slides/Docs</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StocAIPage; 