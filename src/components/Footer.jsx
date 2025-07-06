import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact">
      <h2>Contact & Partnerships</h2>
      <p>Business inquiries: <a href="mailto:owewhm@gmail.com">owewhm@gmail.com</a></p>
      <p>Partnership opportunities | Commercial licensing | Enterprise solutions</p>
      <p>Ready to transform your architectural design process with conversational AI</p>
      <p>&copy; {currentYear} ChatterMass. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 