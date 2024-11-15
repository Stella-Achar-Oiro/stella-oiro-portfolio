import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Groupie Tracker",
      description: "A dynamic web application built with Go and JavaScript that visualizes music artist data and concert locations with interactive maps.",
      image: "https://i.postimg.cc/wxtW7rPn/groupietracker.jpg",
      technologies: ["Go", "JavaScript", "HTML/CSS", "Leaflet.js"],
      github: "https://github.com/Stella-Achar-Oiro/groupie-tracker",
      demo: "#"
    },
    {
      title: "My First API",
      description: "A professional-grade RESTful API for task management built with Go, featuring comprehensive error handling, middleware support, and Swagger documentation.",
      image: "https://i.postimg.cc/L5TFq0Qq/restapi.png",
      technologies: ["Go", "RESTful API", "Swagger", "Git"],
      github: "https://github.com/Stella-Achar-Oiro/my-first-api",
      demo: "#"
    },
    {
      title: "Wordify",
      description: "A sophisticated text manipulation tool built in Go that handles number system conversions, smart text formatting, and context-aware corrections.",
      image: "https://i.postimg.cc/tgx0dgmG/wordify.jpg",
      technologies: ["Go", "CLI", "Text Processing", "File I/O"],
      github: "https://github.com/Stella-Achar-Oiro/wordify.git",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;