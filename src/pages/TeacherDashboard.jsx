import React from 'react';
import CreateNewProject from '../components/CreateNewProject';
import AllProjects from '../components/AllProjects';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import './TeacherDashboard.css';

const TeacherDashboard = ({ projects, setProjects, handleGradeProject }) => {
  const projectStats = {
    completed: projects.filter(p => p.progress === 100).length,
    inProgress: projects.filter(p => p.progress > 0 && p.progress < 100).length,
    overdue: 0,
  };
  const averageCompletion = Math.round(
    projects.length > 0 ? projects.reduce((acc, curr) => acc + curr.progress, 0) / projects.length : 0
  );

  return (
    <div className="dashboard-container teacher-dashboard">
      <div className="dashboard-grid">
        <CreateNewProject setProjects={setProjects} />
        <AllProjects projects={projects} handleGradeProject={handleGradeProject} />
        <AnalyticsDashboard stats={projectStats} averageCompletion={averageCompletion} />
      </div>
    </div>
  );
  
};

export default TeacherDashboard;