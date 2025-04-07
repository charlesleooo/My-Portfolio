import React from 'react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`footer py-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;