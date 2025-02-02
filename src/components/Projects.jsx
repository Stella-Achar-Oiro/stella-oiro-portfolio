import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kintaraa - ICP Megahackathon Finalist",
      description: "A decentralized community support platform using Internet Computer Protocol. Implemented secure data management system with Rust backend and blockchain. Created responsive, high-performance frontend with React.",
      image: "https://i.postimg.cc/Dw59jgvj/Screenshot-from-2025-02-03-00-07-41.png",
      technologies: ["ICP", "Rust", "React", "Blockchain"],
      github: "https://github.com/Kintaraa/kintaraa",
      demo: "https://24dyw-2yaaa-aaaam-adxmq-cai.icp0.io/",
      showDemo: true
    },
    {
      title: "Decentralized Auction System",
      description: "A complete auction system using smart contracts. Designed and implemented secure auction management including bidding and reserve price mechanisms. Created robust data persistence system utilizing stable variables.",
      image: "https://i.postimg.cc/vHYXqd4y/9b46f25f-cb4e-4908-b558-05c60eb55c0a.png",
      technologies: ["Motoko", "Smart Contracts", "ICP"],
      github: "https://github.com/Stella-Achar-Oiro/motoko-challange.git",
      showDemo: false
    },
    {
      title: "AfyaChain",
      description: "Healthcare records management system on Internet Computer blockchain. Implemented secure, HIPAA-compliant data storage with Go backend. Developed efficient CRUD operations with blockchain persistence layer.",
      image: "https://i.postimg.cc/FFD0KkKt/Screenshot-from-2025-02-03-00-12-53.png",
      technologies: ["Go", "React", "Blockchain", "Healthcare"],
      github: "https://github.com/Vincent-Omondi/AfyaChain",
      showDemo: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
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
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {project.showDemo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary-600"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
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