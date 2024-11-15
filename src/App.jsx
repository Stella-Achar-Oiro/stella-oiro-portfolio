import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import CustomCursor from './components/common/CustomCursor';
import ScrollProgress from './components/common/ScrollProgress';
import { initSmoothScrolling } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="relative min-h-screen bg-gray-900">
        {/* Hide custom cursor on mobile devices */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>
        <ScrollProgress />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
          </motion.div>
          
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                &copy; {new Date().getFullYear()} Stella Oiro. All rights reserved.
              </motion.p>
            </div>
          </footer>
        </motion.div>

        {/* Background Gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-900/10 via-gray-900/50 to-gray-900 -z-10" />
        
        {/* Animated Background Shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-primary-500/5 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;