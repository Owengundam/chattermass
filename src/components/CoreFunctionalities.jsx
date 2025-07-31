import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function CoreFunctionalities() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const expandableRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP: set initial state to collapsed for main
    gsap.set(expandableRef.current, { height: 0, overflow: 'hidden' });
  }, []);

  const toggleExpanded = () => {
    if (!isExpanded) {
      gsap.to(expandableRef.current, {
        height: 'auto',
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(expandableRef.current, { height: 'auto' });
        }
      });
    } else {
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
          chatMASS Core Abilities
        </h2>
      </div>
      
      <div className="ui-breakdown-container">
        {/* Three always-expanded sections in responsive grid */}
        <div className="small-collapsibles-grid">
          <div>
            <div className="small-expand-button" style={{ cursor: 'default', pointerEvents: 'none' }}>
              <span>Knowledge Base</span>
            </div>
            <div className="small-expandable-content">
              <div className="small-diagram-container">
                <img 
                  src="/images/corefunction1.png"
                  alt="Function 1 - Core architectural analysis and massing tools"
                  className="small-breakdown-diagram"
                />
              </div>
              <div className="small-breakdown-description">
                <p>Use the chat to inquire about the project information and the massing evaluation.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="small-expand-button" style={{ cursor: 'default', pointerEvents: 'none' }}>
              <span>Agentic Massing Design</span>
            </div>
            <div className="small-expandable-content">
              <div className="small-diagram-container">
                <img 
                  src="/images/corefunction2.png"
                  alt="Function 2 - Agent-based programming interface"
                  className="small-breakdown-diagram"
                />
              </div>
              <div className="small-breakdown-description">
                <p>Use the interface or chat to design, evaluate and export the massing of the project.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="small-expand-button" style={{ cursor: 'default', pointerEvents: 'none' }}>
              <span>Typology</span>
            </div>
            <div className="small-expandable-content">
              <div className="small-diagram-container">
                <img 
                  src="/images/corefunction3.png"
                  alt="Function 3 - Interactive design controls"
                  className="small-breakdown-diagram"
                />
              </div>
              <div className="small-breakdown-description">
                <p>Use the interface or chat to determine the typology of the project.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Existing main collapsible */}
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
              <div className="breakdown-description">
                <h3>Interface Components</h3>
                <p>The interface demonstrates real-time architectural massing capabilities with integrated agent-based programming, 
                   spatial analysis tools, and interactive design controls for complex urban planning scenarios.</p>
              </div>
              <div className="diagram-container">
                <img 
                  src="/images/diagram/diagram-07.png" 
                  alt="UI Function Breakdown - Detailed interface analysis showing massing tools, agent controls, and spatial programming features"
                  className="breakdown-diagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreFunctionalities;