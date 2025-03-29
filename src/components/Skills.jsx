import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        "Software Development: Golang, JavaScript, Python (Django), Motoko, Rust",
        "Web Development: React, FastAPI, TypeScript, HTML, SCSS, Redux",
        "DevOps & Cloud: Docker, Git, CI/CD, AWS, Cloud Services",
        "Healthcare Systems: EMR, HMIS, Clinical Decision Support Systems",
        "Database Management: MongoDB, PostgreSQL, SQLite3, NoSQL (JSON)"
      ]
    },
    {
      title: "Project Management",
      skills: [
        "Tools: JIRA, Trello, Asana, Airtable, Slack, Google Workspace",
        "Project Planning & Stakeholder Communication",
        "Status Reports & Scheduling",
        "Administrative Support & Risk Management",
        "APIs & Microservices: REST, SOAP, GraphQL, Webhook APIs"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Coordination & Leadership",
        "Problem-Solving & Risk Assessment",
        "Organizational Skills & Multitasking",
        "Clear Communication & Creativity"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Interests & Aspirations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Blockchain Technology",
              "Software Project Management",
              "Technical Writing",
              "Healthcare Innovation",
              "Community Building"
            ].map((interest, index) => (
              <span
                key={index}
                className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;