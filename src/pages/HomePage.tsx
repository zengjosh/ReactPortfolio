import React from 'react';
import { ChevronRight, Github, Linkedin, Code, BookOpen, Target } from 'lucide-react';
import TypeAnimationText from '../components/TypeAnimationText';
import GradientText from '../components/GradientText';
import Hyperspeed from '../components/Hyperspeed';
import AnimatedImage from '../components/AnimatedImage';
import SpotlightCard from '../components/SpotlightCard';
import AnimatedSkillsBanner from '../components/AnimatedSkillsBanner';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-primary-light/5 to-primary-dark/10 overflow-hidden">
        {/* Hyperspeed Background */}
        <div className="absolute inset-0 opacity-10">
          <Hyperspeed />
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
                  <GradientText
                    colors={["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"]}
                    animationSpeed={3}
                    className="font-bold"
                  >
                    Josh Zeng
                  </GradientText>
                </h1>
                <div className="text-2xl lg:text-4xl text-gray-800 max-w-2xl leading-relaxed flex items-center">
                  <span>a&nbsp;</span>
                  <TypeAnimationText
                    texts={[
                      'Purdue CS student',
                      'developer',
                      'problem-solver',
                      'fast-learner',
                      'creator'
                    ]}
                    className="px-2 sm:px-2 md:px-3 bg-primary text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                    deletionSpeed={30}
                  />
                </div>
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
            <div className="lg:w-1/2">
              <AnimatedImage
                src="https://i.imgur.com/w0iKHeP.jpeg"
                alt="Josh Zeng"
                className="w-full"
              />
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
                  I'm a freshman at Purdue University pursuing a B.S. in Computer Science as part of the Data Mine Learning Community. I recently graduated from Dublin High School with a 4.02 GPA, where I was actively involved in the Engineering and Design Academy, combining hands-on technical work with collaborative problem-solving.
                </p>
                <p className="text-lg leading-relaxed">
                  My passion for computer science grew through personal projects, competitive programming, and extracurriculars, ranging from building web applications and machine learning models to leading student initiatives in technology and environmental sustainability. I'm eager to continue developing my skills, explore new areas within CS, and contribute to impactful projects throughout my time at Purdue and beyond.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <SpotlightCard
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Purdue University freshman in Computer Science, Data Mine Learning Community. Graduated from Dublin High School
                </p>
              </SpotlightCard>

              <SpotlightCard
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                spotlightColor="rgba(139, 92, 246, 0.3)"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Future Goals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage technology to address real-world challenges and create solutions that make life easier and more connected
                </p>
              </SpotlightCard>
            </div>
          </div>

          {/* Skills Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-12">Technical Skills</h3>
            <div className="max-w-6xl mx-auto">
              <AnimatedSkillsBanner
                skills={[
                  'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'C++',
                  'PyTorch', 'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV',
                  'Terraform', 'Azure', 'Docker', 'Git', 'HuggingFace',
                  'Agile', 'CI/CD', 'React', 'TensorFlow', 'Flask'
                ]}
                className="py-8"
              />
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