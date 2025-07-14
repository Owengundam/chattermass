import React from 'react';

function Footer() {
  return (
    <footer className="section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
      </div>
      <div className="contact-info">
        <span className="contact-label">Inquiries: </span>
        <a
          href="mailto:owewhm@gmail.com"
          className="contact-link"
        >
          owewhm@gmail.com
        </a>
      </div>
      <p className="contact-text">
        Ready to transform your architectural design process with conversational AI
      </p>
      <p className="contact-text">
        © 2025 chatterMASS. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer; 