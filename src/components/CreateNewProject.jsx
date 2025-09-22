import React, { useState } from 'react';
import './CreateNewProject.css';

const CreateNewProject = ({ setProjects }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [teamSize, setTeamSize] = useState('2 members');
  const [assignedStudentsInput, setAssignedStudentsInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectTitle.trim() === '' || description.trim() === '') {
      alert('Please fill out all required fields.');
      return;
    }

    const assignedStudents = assignedStudentsInput
      .split(',')
      .map(name => name.trim())
      .filter(name => name);

    const newProject = {
      id: Date.now(),
      title: projectTitle,
      description: description,
      dueDate: dueDate || 'N/A',
      teamSize: teamSize,
      progress: 0,
      team: assignedStudents,
    };

    setProjects(prevProjects => [newProject, ...prevProjects]);
    setProjectTitle('');
    setDescription('');
    setDueDate('');
    setTeamSize('2 members');
    setAssignedStudentsInput('');
  };

  return (
    <div className="card">
      <div className="card-header">
        <span role="img" aria-label="create new project">📝</span>
        Create New Project
      </div>
      <form onSubmit={handleSubmit} className="card-content create-form">
        <label htmlFor="projectTitle">Project Title</label>
        <input 
          id="projectTitle"
          type="text" 
          placeholder="Enter project title" 
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Project description and requirements"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <label htmlFor="dueDate">Due Date</label>
        <input 
          id="dueDate"
          type="text" 
          placeholder="dd-mm-yyyy"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        
        <label htmlFor="teamSize">Team Size</label>
        <select 
          id="teamSize" 
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
        >
          <option>2 members</option>
          <option>3 members</option>
          <option>4 members</option>
          <option>5 members</option>
        </select>

        <label htmlFor="assignedStudents">Assigned Student IDs (comma-separated)</label>
        <input 
          id="assignedStudents"
          type="text" 
          placeholder="e.g., Alice, Bob, Charlie" 
          value={assignedStudentsInput}
          onChange={(e) => setAssignedStudentsInput(e.target.value)}
        />
        
        <button type="submit" className="create-project-button">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateNewProject;