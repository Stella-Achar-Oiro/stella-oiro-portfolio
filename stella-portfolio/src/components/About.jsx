import React from 'react';
import { Code2, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-primary-500" />,
      title: "AfyaChain Winner",
      description: "First place at Zone01 Kisumu hackathon for blockchain-based EMR system"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: "Community Leader",
      description: "Organizer at Gophers Kisumu, active in tech community events"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-500" />,
      title: "Innovation Impact",
      description: "Created Kintsugi Hub for GBV survivors and Rootika for local artisans"
    }
  ];

  const projects = [
    {
      title: "Kintsugi Hub",
      description: "A secure, decentralized platform supporting GBV survivors across Africa with multilingual resources",
      tags: ["Blockchain", "AI", "Social Impact"]
    },
    {
      title: "Rootika",
      description: "Digital marketplace connecting Kenyan jua kali artisans with customers globally",
      tags: ["E-commerce", "Local Trade", "Community"]
    },
    {
      title: "AfyaChain",
      description: "Award-winning blockchain-based EMR and HMIS system enhancing healthcare accessibility",
      tags: ["Healthcare", "Blockchain", "Security"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-3xl mx-auto text-gray-600 mb-12">
          <p className="mb-6">
            Hi! I'm Stella Oiro, a dedicated software developer and community organizer based in Kisumu, 
            currently sharpening my skills as an apprentice developer at Zone01 Kisumu. My journey in tech 
            is fueled by a commitment to building solutions that empower communities and address real-world 
            challenges through innovative applications of technology.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Impact Projects</h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold text-gray-800">{project.title}</h4>
                  <p className="text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mb-6">
            Beyond building software, I'm deeply committed to fostering a vibrant tech community in my region. 
            As an organizer for Gophers Kisumu, I help connect developers and create spaces for learning and 
            collaboration. I'm also a frequent attendee of tech events, including Google I/O Extended Kisumu, 
            GopherCon Africa, GDG DevFest Kisumu, and various ICP and Zone01 hackathons, where I'm constantly 
            inspired by fellow developers and innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://x.com/Stella_Oiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;