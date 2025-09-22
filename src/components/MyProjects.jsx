import React from 'react';
import './MyProjects.css';

const MyProjects = ({ projects }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span role="img" aria-label="my projects">📁</span>
        My Projects
      </div>
      <div className="card-content">
        {projects && projects.length > 0 ? (
          projects.map(project => (
            <div key={project.id} className="my-project-item">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-team">Team: {project.team.join(', ')}</p>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </div>
            </div>
          ))
        ) : (
          <p>You are not assigned to any projects yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyProjects;