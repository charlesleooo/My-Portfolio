import React from 'react';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Laravel', icon: 'fab fa-laravel' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Java', icon: 'fab fa-java' }
  ];

  return (
    <section id="skills" className={`skills hidden ${darkMode ? 'dark-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title hidden">My Skills</h2>
            <div className="section-divider hidden"></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="text-center mb-5 hidden">
              Here are my technical skills and competencies that I've developed over the years.
              I'm constantly learning and adding new skills to my repertoire.
            </p>
          </div>
        </div>

        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-3 col-sm-4 col-6 mb-4" key={index}>
              <div className="skill-item text-center hidden">
                <i className={`${skill.icon} skill-icon`}></i>
                <h5 className="skill-name mt-3">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;