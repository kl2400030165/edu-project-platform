import React, { useState } from 'react';
import './MyTasks.css';

const MyTasks = ({ tasks: initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks || []);
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: tasks.length + 1,
        description: newTask,
        dueDate: newDueDate || 'N/A',
        status: 'In Progress'
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setNewDueDate('');
    }
  };

  const markComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: 'Completed' } : task
    ));
  };

  return (
    <div className="card">
      <div className="card-header">
        <span role="img" aria-label="my tasks">✅</span>
        My Tasks
      </div>
      <div className="card-content">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task.id} className="task-item">
              <h4 className="task-description">{task.description}</h4>
              <p className="task-due-date">Due: {task.dueDate}</p>
              <div className={`task-status ${task.status.toLowerCase().replace(' ', '-')}`}>
                {task.status}
              </div>
              {task.status !== 'Completed' && (
                <button 
                  className="mark-complete-button"
                  onClick={() => markComplete(task.id)}
                >
                  Mark Complete
                </button>
              )}
            </div>
          ))
        ) : (
          <p>You have no tasks to complete.</p>
        )}
        <div className="add-task-form">
          <h4>Add New Task</h4>
          <input
            type="text"
            placeholder="Task description"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="dd-mm-yyyy"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button className="add-task-button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;