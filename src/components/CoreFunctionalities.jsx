import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function CoreFunctionalities() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [smallCollapsibles, setSmallCollapsibles] = useState({
    F1: false,
    F2: false,
    F3: false
  });
  
  const expandableRef = useRef(null);
  const contentRef = useRef(null);
  
  // Individual refs for each small collapsible
  const f1Ref = useRef(null);
  const f2Ref = useRef(null);
  const f3Ref = useRef(null);

  useEffect(() => {
    // Initialize GSAP: set initial state to collapsed
    gsap.set(expandableRef.current, { height: 0, overflow: 'hidden' });
    
    // Initialize small collapsibles with more explicit targeting
    if (f1Ref.current) {
      gsap.set(f1Ref.current, { height: 0, overflow: 'hidden' });
    }
    if (f2Ref.current) {
      gsap.set(f2Ref.current, { height: 0, overflow: 'hidden' });
    }
    if (f3Ref.current) {
      gsap.set(f3Ref.current, { height: 0, overflow: 'hidden' });
    }
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

  const toggleSmallCollapsible = (key) => {
    // Get the correct ref for the clicked collapsible
    const refMap = {
      F1: f1Ref,
      F2: f2Ref,
      F3: f3Ref
    };
    
    const targetRef = refMap[key];
    const isCurrentlyExpanded = smallCollapsibles[key];
    
    if (!targetRef?.current) {
      console.warn(`Ref for ${key} not found`);
      return;
    }
    
    // Debug: Log which element is being animated
    console.log(`Toggling ${key}, currently expanded: ${isCurrentlyExpanded}`, targetRef.current);
    
    if (!isCurrentlyExpanded) {
      // Expand this specific collapsible only
      gsap.to(targetRef.current, {
        height: 'auto',
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(targetRef.current, { height: 'auto' });
        }
      });
    } else {
      // Collapse this specific collapsible only
      gsap.to(targetRef.current, {
        height: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
    
    // Update only the state for this specific collapsible
    setSmallCollapsibles(prev => ({
      ...prev,
      [key]: !isCurrentlyExpanded
    }));
  };

  return (
    <section className="section" id="ui-function-breakdown">
      <div className="section-header">
        <h2 className="section-title">
          chatMASS Core Abilities
        </h2>
      </div>
      
      <div className="ui-breakdown-container">
        {/* Three smaller collapsibles in responsive grid */}
        <div className="small-collapsibles-grid">
          <div className="small-expandable-section">
            <button 
              className="small-expand-button"
              onClick={() => toggleSmallCollapsible('F1')}
              aria-expanded={smallCollapsibles.F1}
            >
              <span>Knowledge Base</span>
              <svg 
                className={`expand-icon ${smallCollapsibles.F1 ? 'rotated' : ''}`}
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            
            <div ref={f1Ref} className="small-expandable-content">
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
          
          <div className="small-expandable-section">
            <button 
              className="small-expand-button"
              onClick={() => toggleSmallCollapsible('F2')}
              aria-expanded={smallCollapsibles.F2}
            >
              <span>Agentic Massing Design</span>
              <svg 
                className={`expand-icon ${smallCollapsibles.F2 ? 'rotated' : ''}`}
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            
            <div ref={f2Ref} className="small-expandable-content">
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
          
          <div className="small-expandable-section">
            <button 
              className="small-expand-button"
              onClick={() => toggleSmallCollapsible('F3')}
              aria-expanded={smallCollapsibles.F3}
            >
              <span>Typology</span>
              <svg 
                className={`expand-icon ${smallCollapsibles.F3 ? 'rotated' : ''}`}
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            
            <div ref={f3Ref} className="small-expandable-content">
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