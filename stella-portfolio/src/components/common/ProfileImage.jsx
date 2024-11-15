import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { rotateAnimation, pulseAnimation } from '../animations/variants';
// Import your image
import profileImage from '../../assets/images/dp.jpeg';

const ProfileImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      className="relative w-72 h-72 lg:w-96 lg:h-96" // Increased size
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Animated Rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-primary-500/30" // Increased border width
        variants={rotateAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute inset-4 rounded-full border-4 border-primary-400/30"
        variants={rotateAnimation}
        animate="animate"
        style={{ animationDirection: 'reverse' }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border-4 border-primary-300/30"
        variants={rotateAnimation}
        animate="animate"
      />
      
      {/* Profile Image Container */}
      <motion.div
        className="absolute inset-12 rounded-full overflow-hidden border-8 border-primary-500 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl" // Enhanced border and shadow
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <AnimatePresence mode="wait">
          {!imageLoaded && !hasError && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gray-800"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full" // Larger loader
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.img
          src={profileImage} // Using imported image
          alt="Stella Oiro"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            setHasError(true);
            console.error('Image failed to load:', e);
            e.target.src = "/api/placeholder/400/400";
          }}
        />

        {/* Enhanced Overlay Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 via-primary-400/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>

      {/* Floating Dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary-500 rounded-full" // Larger dots
          variants={pulseAnimation}
          animate="animate"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}

      {/* Interactive Particles */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-300 rounded-full" // Larger particles
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              left: `${50 + 45 * Math.cos(2 * Math.PI * i / 12)}%`,
              top: `${50 + 45 * Math.sin(2 * Math.PI * i / 12)}%`
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;