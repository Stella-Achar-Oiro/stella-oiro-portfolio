import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimationWrapper = ({ 
  children, 
  animation = "fade", // fade, slide, scale, or custom
  direction = "up",
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  className = ""
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });

  const animations = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    slide: {
      hidden: { 
        opacity: 0,
        x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0
      },
      visible: { opacity: 1, x: 0, y: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    custom: {
      hidden: { opacity: 0, scale: 0.8, rotate: -10 },
      visible: { opacity: 1, scale: 1, rotate: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;