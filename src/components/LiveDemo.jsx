import React, { useState, useEffect, useRef } from 'react';

function LiveDemo() {
  const [shouldLoadGame, setShouldLoadGame] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setShouldLoadGame(true);
            observer.disconnect(); // Stop observing once loaded
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="live-demo" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">
          Interactive Demo
        </h2>
        <p className="section-description">
          Unity WebGL build demonstrating the conversational AI control system
        </p>
      </div>
      <div className="demo-container">
        <div className="demo-wrapper">
          {shouldLoadGame ? (
            <iframe
              src="/unity-demo/index.html"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="ChatterMass Unity Demo"
              className="unity-demo-frame"
            ></iframe>
          ) : (
            <div className="unity-loading-placeholder">
              <div className="loading-content">
                <h3>Unity WebGL Demo</h3>
                <p>Demo will load when section is visible</p>
                <div className="loading-indicator">Loading...</div>
              </div>
            </div>
          )}
        </div>
        <div className="demo-controls">
          <p className="demo-instructions">
            The demo shows spatial program generation, agent manipulation, and typology-based layout systems. 
            Natural language commands control agent behavior through the MCP integration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LiveDemo; 