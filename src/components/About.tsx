import React from 'react';
import { Award, Users, Code2, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Award className="w-8 h-8 text-blue-600" />, text: "8+ Years Experience" },
    { icon: <Users className="w-8 h-8 text-teal-600" />, text: "Tech Lead at Aristocrat" },
    { icon: <Code2 className="w-8 h-8 text-orange-500" />, text: "Full Stack Development" },
    { icon: <TrendingUp className="w-8 h-8 text-purple-600" />, text: "AI & ML Specialist" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Who I Am</h2>
            <p className="text-xl text-gray-600 mb-8">Developer based in New Delhi</p>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With over 8 years of experience in software development, I began my career as a Java intern at a mid-sized company. Over time, my curiosity and passion for creating seamless mobile experiences led me to explore cross-platform app development.
              </p>
              <p>
                Today, I specialize in building cross-platform applications with performance, design, and scalability in mind. I take pride in crafting intuitive user interfaces and solving complex problems with clean, efficient code.
              </p>
              <p>
                I'm a passionate and driven software professional with strong interests in <strong className="text-blue-600">Algorithms</strong>, <strong className="text-teal-600">Data Structures</strong>, <strong className="text-orange-500">System Design</strong>, and <strong className="text-purple-600">Application Development</strong>.
              </p>
              <p>
                Currently, I'm working as a <strong className="text-blue-600">Tech Lead</strong> at <strong className="text-teal-600">Aristocrat</strong>, where I drive the design and delivery of high-impact digital solutions. I lead cross-functional teams, architect scalable applications, and mentor developers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  {highlight.icon}
                  <span className="font-medium text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-600 p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Subodh Modgil professional" 
                  className="w-full h-full rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;