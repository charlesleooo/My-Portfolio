import React, { useState } from 'react';

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Farmers Market with Supply-Demand Forecast',
      category: 'web',
      image: '/fmarketglan.png',
      description: 'A fully responsive e-commerce website built with PHP, JavaScript, and Python for Supply-Demand Forecasting.',
      technologies: ['JavaScript', 'PHP', 'Laravel', 'MySQL', 'Python'],
      link: 'https://fmarketglan.com/',
      github: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'web',
      image: '/portfolio.png',
      description: 'A personal portfolio website built with React and Bootstrap',
      technologies: ['React', 'Bootstrap', 'CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Martinas Indulgence',
      category: 'web',
      image: '/martinas.png',
      description: 'Cake Shop that allows the customer to order and buy cake products',
      technologies: ['JavaScript', 'Laravel', 'MySQL', 'PHPMailer', 'TCPDF'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'User Access Request',
      category: 'web',
      image: '/uar.png',
      description: 'User Access Request allows the user to fill up a request form related to their company access and submit it to the companys admin',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'PHPMailer', 'TCPDF'],
      link: 'https://mediumpurple-duck-997551.hostingersite.com/',
      github: '#'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={`projects hidden ${darkMode ? 'dark-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title hidden">My Projects</h2>
            <div className="section-divider hidden"></div>
          </div>
        </div>

        <div className="row">
          {filteredProjects.map(project => (
            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
              <div className="project-card hidden">
                <div className="project-image">
                  <img 
                    src={process.env.PUBLIC_URL + project.image} 
                    alt={project.title}
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                  <div className="project-overlay">
                    <div className="project-buttons">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary me-2">
                        View Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info p-3">
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge rounded-pill bg-primary me-1 mb-1">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;