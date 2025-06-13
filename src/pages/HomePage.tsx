import React from 'react';
import { ChevronRight, Github, Linkedin, Code, BookOpen, Target } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-primary-light/5 to-primary-dark/10 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-70"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary-light/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-dark/10 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 py-12 lg:py-16 relative">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-40 min-h-[calc(100vh-8rem)]">
            <div className="lg:w-1/2 space-y-10 flex flex-col justify-center">
              <div className="space-y-5">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a36bf] to-[#432279]">
                    Josh Zeng
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                  A software developer passionate about crafting elegant solutions through code. 
                  Specializing in full-stack development and machine learning applications.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                <a 
                  href="#about" 
                  className="btn bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg px-12 py-4 rounded-full"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <div className="flex gap-6">
                  <a 
                    href="https://github.com/zengjosh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6 text-gray-700" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/josh-zeng-a7107a273/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6 text-gray-700" />
                  </a>
                  <a 
                    href="https://leetcode.com/u/OhnURcRYW2/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                    aria-label="Leetcode Profile"
                  >
                    <Code className="h-6 w-6 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative flex items-center justify-center">
              <div className="absolute -inset-12 bg-gradient-to-r from-primary/30 via-primary-light/20 to-primary-dark/30 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                  <img 
                    src="https://i.imgur.com/w0iKHeP.jpeg" 
                    alt="Josh Zeng" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative py-40 bg-gradient-to-b from-white to-gray-50 overflow-hidden" id="about">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-32 right-10 w-64 h-64 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-10 w-48 h-48 bg-gradient-to-r from-primary-dark/20 to-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about technology and driven by curiosity to solve real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            <div className="space-y-8">
              <div className="prose prose-lg text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Hi, I'm Josh, a senior at Dublin High School and a member of the Dublin Engineering and Design Academy. 
                  My passion for computer science has grown throughout high school, and I'm excited to pursue this field in college. 
                  What excites me most about computer science is the wide range of opportunities it offers, allowing me to specialize 
                  in areas that genuinely interest me.
                </p>
                <p className="text-lg leading-relaxed">
                  I've built a solid foundation in computer science through courses like Computer Science Essentials, 
                  AP Computer Science Principles, and AP Computer Science Applications. Starting with block code and Python 
                  in Essentials, I expanded my skills in Principles with collaborative projects using the SCRUM development process, 
                  enhancing my understanding of coding in Python, documenting projects, and managing teamwork.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dublin High School senior in the Engineering and Design Academy with strong CS foundation
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Future Goals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage technology to address real-world challenges and create solutions that make life easier and more connected
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-12">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {['Python', 'Java', 'C++', 'JavaScript', 'HTML/CSS', 'React', 'TensorFlow', 'PyTorch', 'OpenCV', 'Flask', 'Git/GitHub'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-32 bg-white overflow-hidden" id="projects">
        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-primary-light/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing my latest work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
            {/* Project 1 */}
            <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white">
                <span className="text-2xl font-semibold">STOC AI</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">STOC AI</h3>
                <p className="text-gray-600 mb-4">
                  A low-cost, portable device that estimates total organic carbon in soil using real-time sensor data and machine learning. Built for field deployment without internet access, enabling affordable soil health assessment.
                </p>
                <a href="/stoc-ai" className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark">
                  View Project
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center text-white">
                <span className="text-2xl font-semibold">LSTM NVDA Model</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">LSTM NVDA Model</h3>
                <p className="text-gray-600 mb-4">
                  A deep learning project exploring NVIDIA stock price prediction using LSTM networks, combining technical indicators with sentiment analysis from news articles.
                </p>
                <a href="/lstm-financial-model" className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark">
                  View Project
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white">
                <span className="text-2xl font-semibold">Neurochess</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">Neurochess</h3>
                <p className="text-gray-600 mb-4">
                  A web platform combining chess education with interactive analysis and cognitive feedback, featuring educational videos and AI-powered move analysis.
                </p>
                <a href="/neurochess" className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark">
                  View Project
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/projects" className="btn btn-primary">
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;