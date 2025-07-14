import React, { useRef, useEffect } from 'react';

function ScrollingMask06() {
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mask = maskRef.current;
    const container = containerRef.current;

    const updateMaskPositioning = () => {
      const heroElement = document.querySelector('.hero-section');
      const appContainer = document.querySelector('.app-container');
      if (!heroElement || !section || !mask || !container || !appContainer) return;

      const heroRect = heroElement.getBoundingClientRect();
      const appRect = appContainer.getBoundingClientRect();

      // Position the mask section to exactly overlay the hero
      section.style.top = `${heroRect.top - appRect.top}px`;
      section.style.left = `${heroRect.left - appRect.left}px`;
      section.style.width = `${heroRect.width}px`;
      section.style.height = `200vh`; // Create scroll space for the pin effect
      
      // Size the sticky container to match hero dimensions
      container.style.height = `${heroRect.height}px`;
      container.style.width = `${heroRect.width}px`;
      
      // Load the image to get its actual dimensions for proper aspect ratio
      const img = new Image();
      img.onload = () => {
        const imageAspectRatio = img.naturalWidth / img.naturalHeight;
        const heroHeight = heroRect.height;
        
        // Size the mask based on image aspect ratio - scale to hero height
        const scaledWidth = heroHeight * imageAspectRatio;
        mask.style.height = `${heroHeight}px`;
        mask.style.width = `${scaledWidth}px`;
        
        console.log('ScrollingMask06 positioning updated:', {
          heroHeight,
          originalImageWidth: img.naturalWidth,
          originalImageHeight: img.naturalHeight,
          imageAspectRatio,
          scaledWidth,
          sectionHeight: section.style.height
        });
      };
      
      img.src = '/images/diagram/diagram-06.png';
    };

    // Initial setup
    const timer = setTimeout(() => {
      updateMaskPositioning();
    }, 100);

    // Update on resize (with throttling)
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateMaskPositioning();
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    
    // Also update when hero image loads (in case it changes dimensions)
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      heroImage.addEventListener('load', updateMaskPositioning);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      if (heroImage) {
        heroImage.removeEventListener('load', updateMaskPositioning);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="scrolling-mask-06-section">
      <div ref={containerRef} className="scrolling-mask-sticky-container">
        {/* Moving Mask Image - slides over the hero background */}
        <div ref={maskRef} className="scrolling-mask-06-foreground"></div>
      </div>
    </section>
  );
}

export default ScrollingMask06; 