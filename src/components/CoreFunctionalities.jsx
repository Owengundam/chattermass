import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function CoreFunctionalities() {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandableRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP: set initial state to collapsed
    gsap.set(expandableRef.current, { height: 0, overflow: 'hidden' });
  }, []);

  const toggleExpanded = () => {
    if (!isExpanded) {
      // Expand animation
      gsap.to(expandableRef.current, {
        height: 'auto',
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          // Allow content to flow naturally after animation
          gsap.set(expandableRef.current, { height: 'auto' });
        }
      });
    } else {
      // Collapse animation
      gsap.to(expandableRef.current, {
        height: 0,
        duration: 0.5,
        ease: 'power2.in'
      });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="section" id="ui-function-breakdown">
      <div className="section-header">
        <h2 className="section-title">
          UI Function Breakdown
        </h2>
      </div>
      
      <div className="ui-breakdown-container">

        
        <div className="expandable-section">
          <button 
            className="expand-button"
            onClick={toggleExpanded}
            aria-expanded={isExpanded}
          >
            <span>View Detailed Function Breakdown</span>
            <svg 
              className={`expand-icon ${isExpanded ? 'rotated' : ''}`}
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          
          <div ref={expandableRef} className="expandable-content">
            <div ref={contentRef}>
              <div className="diagram-container">
                <img 
                  src="/images/diagram/diagram-07.png" 
                  alt="UI Function Breakdown - Detailed interface analysis showing massing tools, agent controls, and spatial programming features"
                  className="breakdown-diagram"
                />
              </div>
              <div className="breakdown-description">
                <h3>Interface Components</h3>
                <p>The interface demonstrates real-time architectural massing capabilities with integrated agent-based programming, 
                   spatial analysis tools, and interactive design controls for complex urban planning scenarios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreFunctionalities; 