import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-4 fw-bold mb-4">Hi, I'm <span className="highlight">Charles Leo</span></h1>
            <h2 className="h3 mb-4">Full-Stack Developer</h2>
            <p className="lead mb-4">
              I build responsive, user-friendly web applications with modern technologies, 
              ensuring seamless performance and user friendly experience.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary me-3">View My Work</a>
              <a href="#contact" className="btn btn-outline-primary">Get In Touch</a>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
            <div className="profile-image-container">
              <img 
                src={process.env.PUBLIC_URL + '/ProfilePic.png'} 
                alt="Profile" 
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;