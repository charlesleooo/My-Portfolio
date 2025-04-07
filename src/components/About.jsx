import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`about hidden ${darkMode ? 'dark-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title hidden">About Me</h2>
            <div className="section-divider hidden"></div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="about-image-container hidden">
              <img 
                src={process.env.PUBLIC_URL + '/programming.avif'} 
                alt="Programming" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          <div className="col-md-7">
            <h3 className="mb-4 hidden">Full-Stack Developer with a passion for creating powerful websites providing the best user experience</h3>
            <p className="mb-4 hidden">
              I am a full-stack developer with strong experience in React, JavaScript, PHP & Laravel from Philippines. 
              Main focus is developing responsive and user-centric websites to deliver seamless and engaging experience to the users. 
              With excellent frontend & backend development skills I create efficient & scalable solutions to meet the needs of the user & achieve business goals.
            </p>
            <p className="mb-4 hidden">
              My journey in web development started with a passion for creating interactive and beautiful web experiences. 
              I'm passionate about learning new technologies and solving complex problems through elegant solutions.
            </p>
            <div className="mt-4 hidden">
              <a href="#contact" className="btn btn-primary me-3">Hire Me</a>
              <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;