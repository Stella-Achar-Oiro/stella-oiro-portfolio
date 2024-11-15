import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Stella Oiro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;