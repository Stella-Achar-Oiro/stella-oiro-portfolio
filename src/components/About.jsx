import React from 'react';
import { Code2, Users, Lightbulb, Award, Briefcase } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-primary-500" />,
      title: "ICP Megahackathon Finalist",
      description: "Kintaraa Project - Decentralized Community Support Platform"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: "Community Leadership",
      description: "Community Organizer at Gophers Kisumu"
    },
    {
      icon: <Award className="w-8 h-8 text-primary-500" />,
      title: "Certification",
      description: "Rust Smart Contract 101 by Dacade"
    }
  ];

  const experience = [
    {
      title: "Software Developer & Technical Writer",
      company: "Zone01 Kisumu",
      period: "Apr 2024 - Present",
      description: [
        "Led Software Projects by managing project planning, stakeholder communication, and tracking deliverables",
        "Coordinated team activities and maintained timelines using JIRA, Trello, and Asana",
        "Created technical documentation and status reports for developers and stakeholders",
        "Conducted risk assessments via code reviews and quality audits",
        "Developed full-stack applications using Golang, React, and FastAPI"
      ]
    },
    {
      title: "Data Analyst Trainee",
      company: "Azubi Africa",
      period: "June 2023",
      description: [
        "Performed data analysis and reporting to support project planning decisions",
        "Assisted in data preprocessing for structured decision-making"
      ]
    }
  ];

  const projects = [
    {
      title: "AfyaChain Blockchain Solution",
      description: "A blockchain-based medical record system using Golang with smart contracts for secure patient data management",
      tags: ["Healthcare", "Blockchain", "Golang"]
    },
    {
      title: "Kintaraa",
      description: "A secure, decentralized platform supporting GBV survivors across Africa with multilingual resources",
      tags: ["Blockchain", "AI", "Social Impact"]
    },
    {
      title: "Rootika",
      description: "Digital marketplace connecting Kenyan jua kali artisans with customers globally",
      tags: ["E-commerce", "Local Trade", "Community"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-3xl mx-auto text-gray-600 mb-12">
          <p className="mb-6">
            Dedicated Apprentice Software Developer with experience in Golang, JavaScript, and Python. 
            Skilled in creating healthcare-focused applications including predictive analytics systems 
            and electronic medical record solutions. Passionate about using technology to solve healthcare 
            challenges and communicating technical concepts effectively.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary-500" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold text-gray-800">{job.title} - {job.company}</h4>
                  <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

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