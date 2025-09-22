import React from 'react';
import { Link } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = ({ projects, handleGradeProject }) => {
  const onGradeClick = (projectId) => {
    const newProgress = prompt("Enter new progress percentage (0-100):");
    if (newProgress !== null && !isNaN(newProgress) && newProgress >= 0 && newProgress <= 100) {
      handleGradeProject(projectId, parseInt(newProgress, 10));
    } else if (newProgress !== null) {
      alert("Please enter a valid number between 0 and 100.");
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span role="img" aria-label="all projects">📊</span>
        All Projects
      </div>
      <div className="card-content">
        {projects && projects.length > 0 ? (
          projects.map(project => (
            <div key={project.id} className="project-item">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-team">Team: {project.team.join(', ')}</p>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p className="project-progress">Progress: {project.progress}%</p>
              <div className="project-actions">
                <Link to={`/project/${project.id}`} className="view-button">View Details</Link>
                <button className="grade-button" onClick={() => onGradeClick(project.id)}>Grade</button>
              </div>
            </div>
          ))
        ) : (
          <p>No projects to display.</p>
        )}
      </div>
    </div>
  );
};

export default AllProjects;