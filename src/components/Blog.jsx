import React from 'react';
import { BookOpen, Calendar, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Go Libraries to Supercharge Your Web Server Projects",
      excerpt: "Go libraries offer powerful tools to improve web server development, but the vast ecosystem can be overwhelming for developers.",
      date: "2024",
      readTime: "5 min read",
      link: "https://dev.to/stellaacharoiro/10-go-libraries-to-supercharge-your-web-server-projects-1ei6",
      tags: ["Golang", "Documentation", "Technical Writing", "Best Practices"]
    },
    {
      title: "The Surprising Reason Why Modular Code Organization Will Improve Your Full Stack Workflow",
      excerpt: "Monolithic codebases are often the starting point for many full-stack developers.",
      date: "2024",
      readTime: "4 min read",
      link: "https://dev.to/stellaacharoiro/the-surprising-reason-why-modular-code-organization-will-improve-your-full-stack-workflow-1bla",
      tags: ["Golang", "Besr Pactices", "Documentation"]
    },
    {
      title: "How to Master Go for Predictive Analytics: A Step-by-Step Guide for Beginner Developers",
      excerpt: "Technology's zooming ahead at lightning speed, and it can feel like you're always playing catch-up.",
      date: "2024",
      readTime: "6 min read",
      link: "https://dev.to/stellaacharoiro/how-to-master-go-for-predictive-analytics-a-step-by-step-guide-for-beginner-developers-30c9",
      tags: ["Golang", "Documentation", "Full Stack Development"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Technical Writing</h2>
          <a 
            href="https://dev.to/stellaacharoiro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-500 hover:text-primary-600"
          >
            View all posts
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={16} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500"
                  >
                    {post.title}
                  </a>
                </h3>

                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 gap-1"
                >
                  Read more
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Want to Read More?</h3>
            <p className="text-gray-600 mb-6">
              Follow my technical writing journey on DEV Community where I share insights about software development,
              community building, and technology for social impact.
            </p>
            <a 
              href="https://dev.to/stellaacharoiro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Visit DEV Profile
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;