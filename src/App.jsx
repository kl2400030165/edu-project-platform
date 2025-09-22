import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import LoginPage from './pages/LoginPage';
import ProjectDetails from './pages/ProjectDetails';
import './App.css';

// Data structures to simulate student-teacher and teacher-student assignments
const teacherAssignments = {
  'alice': 'Ms. Davis',
  'bob': 'Mr. Evans',
  'charlie': 'Ms. Davis'
};

const studentAssignments = {
  'Ms. Davis': ['Alice', 'Charlie'],
  'Mr. Evans': ['Bob']
};

function App() {
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');
  const [assignedTeacher, setAssignedTeacher] = useState('');
  const [assignedStudents, setAssignedStudents] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleLogin = (role, name) => {
    setUserRole(role);
    setUserName(name);
    
    if (role === 'student') {
      const teacher = teacherAssignments[name.toLowerCase()] || 'Not Assigned';
      setAssignedTeacher(teacher);
    } else {
      setAssignedTeacher('');
    }

    if (role === 'teacher') {
      const students = studentAssignments[name] || [];
      setAssignedStudents(students);
    } else {
      setAssignedStudents([]);
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setUserName('');
    setAssignedTeacher('');
    setAssignedStudents([]);
  };

  const handleGradeProject = (projectId, newProgress) => {
    setProjects(prevProjects => 
      prevProjects.map(project => 
        project.id === projectId ? { ...project, progress: newProgress } : project
      )
    );
  };
  
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/*"
            element={
              userRole ? (
                <>
                  <Header 
                    userRole={userRole} 
                    userName={userName} 
                    assignedTeacher={assignedTeacher}
                    assignedStudents={assignedStudents} 
                    onLogout={handleLogout}
                  />
                  <Routes>
                    <Route path="/teacher" element={
                      <TeacherDashboard projects={projects} setProjects={setProjects} handleGradeProject={handleGradeProject} />
                    } />
                    <Route path="/student" element={<StudentDashboard />} />
                    <Route path="/project/:projectId" element={<ProjectDetails projects={projects} />} />
                    <Route path="/" element={<Navigate to="/teacher" />} />
                  </Routes>
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;