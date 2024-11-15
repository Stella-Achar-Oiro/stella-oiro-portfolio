import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="fixed right-8 bottom-8 flex flex-col items-center gap-2 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-white text-sm font-medium">
          <motion.span
            style={{ opacity: scrollYProgress }}
          >
            Scroll Progress
          </motion.span>
        </div>
        <div className="w-1 h-24 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-primary-500 rounded-full"
            style={{ 
              scaleY: scrollYProgress,
              transformOrigin: 'bottom'
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgress;