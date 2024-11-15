import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full bg-white rounded-full"
          animate={{
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </motion.div>

      {/* Cursor trail */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-40 mix-blend-difference"
          style={{
            x: useSpring(cursorX, { ...springConfig, delay: (i + 1) * 50 }),
            y: useSpring(cursorY, { ...springConfig, delay: (i + 1) * 50 }),
          }}
        >
          <motion.div
            className="w-full h-full bg-white/30 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CustomCursor;