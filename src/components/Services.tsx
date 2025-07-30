import React from 'react';
import { Brain, Code, ShoppingCart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "AI Generalist",
      description: "I help businesses, entrepreneurs, and individuals harness the power of AI to solve real-world problems, automate workflows, and make data-driven decisions.",
      features: "Custom AI Solutions, Machine Learning & Predictive Analytics, Natural Language Processing (NLP), Computer Vision Applications, AI Integration & Workflow Automation, Prompt Engineering for LLMs",
      tools: "Python, TensorFlow, PyTorch, OpenAI API, Hugging Face, LangChain, Scikit-learn, FastAPI"
    },
    {
      icon: <Code className="w-12 h-12 text-teal-600" />,
      title: "Front-end Development",
      description: "I specialize in crafting responsive, performant, and accessible web interfaces. I enjoy coding from scratch, transforming designs into interactive experiences.",
      features: "Responsive Design, Modern JavaScript (ES6+), TypeScript, Angular Applications, Progressive Web Apps, Cross-platform Mobile Development",
      tools: "JavaScript, TypeScript, Angular, HTML5, CSS3, Sass, Bootstrap, RxJS, Ionic, AWS, Azure"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-500" />,
      title: "E-commerce",
      description: "I build and integrate scalable e-commerce solutions that drive conversions and provide seamless user experiences.",
      features: "E-commerce Platform Integration, Custom Product Templates & UX Optimization, Secure Payment Gateway Integration, Headless Commerce & API-first Architectures",
      tools: "Shopify, WooCommerce, Stripe, PayPal, REST APIs, GraphQL, Headless CMS, Firebase, React, Next.js"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What I do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Services:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{service.features}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tools & Technologies:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{service.tools}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;