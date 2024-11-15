import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with Golang and React. Implements user authentication, real-time updates, and database integration.",
      image: "/api/placeholder/600/400",
      technologies: ["Golang", "React", "PostgreSQL", "Docker"],
      github: "https://github.com/Stella-Achar-Oiro/project-one",
      demo: "#"
    },
    {
      title: "Project Two",
      description: "A Python-based data analysis tool that processes large datasets and generates interactive visualizations.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Pandas", "Matplotlib", "Flask"],
      github: "https://github.com/Stella-Achar-Oiro/project-two",
      demo: "#"
    },
    {
      title: "Project Three",
      description: "An e-commerce platform built with modern JavaScript frameworks and integrated payment processing.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Stella-Achar-Oiro/project-three",
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