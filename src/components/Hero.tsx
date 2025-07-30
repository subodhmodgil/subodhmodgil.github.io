import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I am <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Subodh Modgil</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Front-End Dev & AI Generalist
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I craft beautiful, functional web experiences and AI solutions that make a difference. 
              Passionate about clean code, innovative design, and solving complex problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 p-2">
                <img 
                  src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Subodh Modgil smiling" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => scrollToSection('services')}
            className="animate-bounce text-blue-600 hover:text-teal-600 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;