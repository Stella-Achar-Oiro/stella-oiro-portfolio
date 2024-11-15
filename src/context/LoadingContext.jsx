import React, { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen when all resources are loaded
    window.addEventListener('load', () => {
      setIsLoading(false);
    });

    // Fallback to hide loading screen after 3 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Get the loading screen element
    const loadingScreen = document.getElementById('loading');
    
    if (!isLoading && loadingScreen) {
      // Add fade-out class
      loadingScreen.classList.add('fade-out');
      
      // Remove loading screen after animation
      setTimeout(() => {
        document.body.classList.add('loaded');
      }, 500);
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);