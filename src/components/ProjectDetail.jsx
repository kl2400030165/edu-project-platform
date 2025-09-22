import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({ project }) => {
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <span role="img" aria-label="project details">🔍</span>
        Project Details
      </div>
      <div className="card-content">
        <h2>{project.title}</h2>
        <p><b>Team:</b> {project.team.join(', ')}</p>
        <p><b>Description:</b> {project.description}</p>
        <p><b>Progress:</b> {project.progress}%</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;