import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ userRole, userName, assignedTeacher, assignedStudents, onLogout }) => {
  return (
    <header className="app-header">
      <div className="platform-title">
        <span role="img" aria-label="graduation cap">🎓</span>
        EduProject Platform
      </div>
      <p className="platform-subtitle">Collaborative Student Group Project Management</p>
      <div className="view-buttons">
        {userRole === 'teacher' && (
          <div className="user-info">
            <h4 className="user-label">Your Students:</h4>
            {assignedStudents.length > 0 ? (
              <p className="user-name-list">{assignedStudents.join(', ')}</p>
            ) : (
              <p className="user-name-list">No students assigned.</p>
            )}
          </div>
        )}
        {userRole === 'student' && (
          <div className="user-info">
            <h4 className="user-label">Assigned Teacher:</h4>
            <p className="user-name">{assignedTeacher || 'Not Assigned'}</p>
          </div>
        )}
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;