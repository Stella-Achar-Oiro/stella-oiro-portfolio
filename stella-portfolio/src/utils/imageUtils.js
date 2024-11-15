// Image optimization and loading utilities
export const getImagePath = (imageName) => {
    try {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    } catch (error) {
      console.error(`Error loading image: ${imageName}`, error);
      return null;
    }
  };
  
  // Image dimensions for common uses
  export const imageSizes = {
    profile: {
      width: 400,
      height: 400,
    },
    projectThumbnail: {
      width: 600,
      height: 400,
    },
    blogThumbnail: {
      width: 800,
      height: 400,
    },
  };
  
  // Lazy loading helper
  export const lazyLoadImage = (imageUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${imageUrl}`));
    });
  };