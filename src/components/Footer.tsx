import React from 'react';
import { Mail, Github, Facebook, Twitter, Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Code size={20} />, href: "https://codepen.io", label: "CodePen" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/subodhmodgil", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/ModgilSubodh", label: "Twitter" },
    { icon: <Github size={20} />, href: "https://github.com/subodhmodgil", label: "GitHub" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <a 
              href="mailto:subodh348modgil@gmail.com" 
              className="text-2xl font-semibold hover:text-blue-400 transition-colors"
            >
              Mail me
            </a>
            <p className="text-gray-400 mt-2">Let's discuss your next project</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="flex items-center justify-center text-gray-400">
              Made with <Heart className="w-5 h-5 text-red-500 mx-2" /> in India
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © 2024 Subodh Modgil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;