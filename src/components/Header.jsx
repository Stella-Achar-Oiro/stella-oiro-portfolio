import React, { useEffect } from 'react';
import { Github, Twitter, Linkedin, Code2, ChevronDown } from 'lucide-react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import ProfileImage from './common/ProfileImage';
import { headerTextVariants, staggerContainer } from './animations/variants';

const Header = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 50) {
        controls.start({ opacity: 0, y: -100 });
      } else {
        controls.start({ opacity: 1, y: 0 });
      }
    });

    return () => unsubscribe();
  }, [controls, scrollY]);

  const backgroundVariants = {
    animate: {
      background: [
        'linear-gradient(to right, #1a202c, #2d3748)',
        'linear-gradient(to right, #1a202c, #2d3748, #1a202c)',
        'linear-gradient(to right, #2d3748, #1a202c)',
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
        animate="animate"
      >
        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
            }}
          />
        ))}
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="relative container mx-auto px-4 py-4 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <motion.span
          className="text-2xl lg:text-3xl font-bold flex items-center gap-3 text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Code2 className="w-8 h-8 lg:w-10 lg:h-10 text-primary-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600 font-extrabold">
            Stella Oiro
          </span>
        </motion.span>

        <motion.div
          className="flex gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: <Github />, url: "https://github.com/Stella-Achar-Oiro", label: "GitHub" },
            { icon: <Twitter />, url: "https://x.com/Stella_Oiro", label: "Twitter" },
            { icon: <Linkedin />, url: "https://www.linkedin.com/in/stella-achar-oiro/", label: "LinkedIn" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white hover:text-primary-300 transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                {social.icon}
                <motion.span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-primary-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {social.label}
                </motion.span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left text-white"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight"
            custom={0}
            variants={headerTextVariants}
          >
            Building Technology
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 leading-tight"
              animate={{
                backgroundPosition: ['0%', '100%'],
                backgroundSize: ['100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              for Community Impact
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mb-10 mx-auto lg:mx-0 leading-relaxed"
            custom={1}
            variants={headerTextVariants}
          >
            Software Developer & Technical Writer. 
            Passionate about developing scalable solutions, driving innovation, and streamlining workflows.
            Skilled in project coordination, stakeholder communication, and technical documentation.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center lg:justify-start"
            custom={2}
            variants={headerTextVariants}
          >
            <motion.a
              href="#projects"
              className="group relative overflow-hidden bg-primary-500 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-primary-500/50 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-primary-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween" }}
              />
              <span className="relative">View Projects</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="relative overflow-hidden border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileImage />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="animate-bounce" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;