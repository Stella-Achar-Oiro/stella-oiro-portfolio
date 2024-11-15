import React from 'react';
import { Github, Twitter, Linkedin, Code2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold flex items-center gap-2">
          <Code2 className="w-6 h-6" />
          Stella Oiro
        </span>
        <div className="flex gap-4">
          <a href="https://github.com/Stella-Achar-Oiro" 
             className="hover:text-primary-300 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://x.com/Stella_Oiro"
             className="hover:text-primary-300 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            <Twitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/stella-achar-oiro/"
             className="hover:text-primary-300 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6">
          Building Technology<br />for Community Impact
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Software Developer, Technical Writer & Community Organizer at Zone01 Kisumu, passionate about creating 
          innovative solutions and sharing knowledge to empower communities and drive positive change in the World.
        </p>
        <div className="flex gap-4">
          <a href="#projects" 
             className="bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-lg font-medium transition-colors">
            View Projects
          </a>
          <a href="#contact" 
             className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;