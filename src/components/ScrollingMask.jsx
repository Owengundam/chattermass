import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ScrollingMask() {
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mask = maskRef.current;
    const container = containerRef.current;
    let scrollTriggerInstance = null;

    const updateMaskPositioning = () => {
      const heroElement = document.querySelector('.hero-section');
      const appContainer = document.querySelector('.app-container');
      const mask06Element = document.querySelector('.scrolling-mask-06-foreground');
      
      if (!heroElement || !section || !mask || !container || !appContainer) return;

      const heroRect = heroElement.getBoundingClientRect();
      const appRect = appContainer.getBoundingClientRect();

      // Calculate hero's absolute Y position from the top of the document
      const heroAbsoluteY = window.scrollY + heroRect.top;

      // Position the mask section to exactly overlay the hero
      section.style.top = `${heroRect.top - appRect.top}px`;
      section.style.left = `${heroRect.left - appRect.left}px`;
      section.style.width = `${heroRect.width}px`;
      section.style.height = `200vh`; // Create scroll space for the pin effect
      
      // Size the sticky container to match hero dimensions
      container.style.height = `${heroRect.height}px`;
      container.style.width = `${heroRect.width}px`;
      
      // Size the mask to match hero height
      const heroHeight = heroRect.height;
      mask.style.height = `${heroHeight}px`;
      mask.style.width = `${heroHeight}px`;
      
      // Reset any existing transforms
      gsap.set([mask], { x: 0, y: 0 });
      
      // Calculate the distance the mask needs to travel
      const maskWidth = heroHeight; // Square mask
      const containerWidth = heroRect.width;
      const maxTranslateDistance = containerWidth - maskWidth;

      // Kill existing ScrollTrigger if it exists
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      // Create the ScrollTrigger for pinning the entire app container
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: section,
        start: `top ${heroAbsoluteY}px`, // Start when mask reaches hero's absolute Y position
        end: "bottom top",
        pin: appContainer, // Pin the entire app container
        anticipatePin: 1,
        invalidateOnRefresh: true, // Recalculate on refresh
        onUpdate: (self) => {
          // Animate both masks based on scroll progress
          const progress = self.progress;
          
          // Calculate travel distance for 05 mask (square)
          const translateDistance05 = progress * maxTranslateDistance;
          gsap.set(mask, { x: translateDistance05 });
          
          // Calculate travel distance for 06 mask (based on its actual width)
          if (mask06Element) {
            const mask06Width = mask06Element.offsetWidth;
            const maxTranslateDistance06 = containerWidth - mask06Width;
            const translateDistance06 = progress * maxTranslateDistance06;
            gsap.set(mask06Element, { x: translateDistance06 });
          }
          
          console.log('ScrollTrigger progress:', progress, 'translateDistance05:', translateDistance05);
        },
        onToggle: (self) => {
          if (self.isActive) {
            console.log('Pin activated at hero position');
          } else {
            console.log('Pin released');
          }
        }
      });

      console.log('GSAP ScrollTrigger setup complete:', {
        heroHeight,
        maskWidth: heroHeight,
        maxTranslateDistance,
        containerWidth,
        heroAbsoluteY,
        startTrigger: `top ${heroAbsoluteY}px`,
        sectionHeight: section.style.height,
        hasMask06: !!mask06Element
      });
    };

    // Initial setup
    const timer = setTimeout(() => {
      updateMaskPositioning();
    }, 100);

    // Update on resize and scroll (with throttling)
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateMaskPositioning();
        ScrollTrigger.refresh(); // Refresh all ScrollTriggers
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
      // Clean up ScrollTrigger instances
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="scrolling-mask-section">
      <div ref={containerRef} className="scrolling-mask-sticky-container">
        {/* Moving Mask Image - slides over the hero background */}
        <div ref={maskRef} className="scrolling-mask-foreground"></div>
      </div>
    </section>
  );
}

export default ScrollingMask; 