import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="card project-details-container">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
        <Link to="/teacher">Go back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="card project-details-container">
      <div className="card-header">
        <span role="img" aria-label="project details">🔍</span>
        Project Details
      </div>
      <div className="card-content">
        <h2>{project.title}</h2>
        <p><b>Description:</b> {project.description}</p>
        <p><b>Due Date:</b> {project.dueDate}</p>
        <p><b>Team:</b> {project.team.join(', ')}</p>
        <p><b>Progress:</b> {project.progress}%</p>
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
      <Link to="/teacher" className="back-button">Go back to Dashboard</Link>
    </div>
  );
};

export default ProjectDetails;