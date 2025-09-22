import React from 'react';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = ({ stats, averageCompletion }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span role="img" aria-label="analytics dashboard">📈</span>
        Analytics Dashboard
      </div>
      <div className="card-content">
        <h4 className="stats-title">Overall Progress</h4>
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${averageCompletion || 0}%` }}
          ></div>
        </div>
        <p className="average-completion">Average completion: {averageCompletion || 0}%</p>
        <h4 className="stats-title">Project Statistics</h4>
        <ul className="project-stats-list">
          <li className="stat-item completed">
            <span className="dot"></span>Completed: {stats?.completed || 0} projects
          </li>
          <li className="stat-item in-progress">
            <span className="dot"></span>In Progress: {stats?.inProgress || 0} projects
          </li>
          <li className="stat-item overdue">
            <span className="dot"></span>Overdue: {stats?.overdue || 0} project
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;