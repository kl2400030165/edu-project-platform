import React from 'react';
import MyProjects from '../components/MyProjects';
import MyTasks from '../components/MyTasks';
import TeamCommunication from '../components/TeamCommunication';
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="dashboard-container student-dashboard">
      <div className="dashboard-grid">
        <MyProjects projects={[]} />
        <MyTasks tasks={[]} />
        <TeamCommunication messages={[]} />
      </div>
    </div>
  );
};

export default StudentDashboard;