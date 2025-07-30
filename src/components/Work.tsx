import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Work: React.FC = () => {
  const projects = [
    {
      title: "Minimus Weather App",
      description: "A sleek, responsive weather application providing real-time forecasts using OpenWeatherMap API. Built with modern JavaScript, minimal UI design, and location-based search features.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Angular", "Firebase", "PWA", "Responsive Design"],
      features: ["Firebase Authentication", "Server Side Rendered (SEO)", "100/100 Lighthouse PWA score", "Dark & Light Mode", "Modern CSS Grid & Flexbox"],
      status: "live"
    },
    {
      title: "Angular Enterprise App",
      description: "A robust, enterprise-grade Angular application focused on modular architecture, API integration, and scalable UI components. Currently under development with advanced features.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Angular", "TypeScript", "RxJS", "Enterprise"],
      features: ["Modular Architecture", "API Integration", "Scalable Components", "Advanced State Management"],
      status: "in-progress"
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Recent Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated showcase of projects spanning web, mobile, and AI-driven applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.status === 'in-progress' && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    In Progress
                  </div>
                )}
                {project.status === 'live' && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Live
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight size={16} className="text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </button>
                  <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;