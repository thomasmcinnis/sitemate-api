import { useState, useEffect } from 'react';
import {
  getAllIssues,
  getIssueById,
  deleteIssue,
  updateIssue,
  createIssue,
} from './services/api';
import './App.css';

function App() {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const issues = await getAllIssues();
    setIssues(issues);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createIssue(newIssue);
    fetchIssues();
    setNewIssue({ title: '', description: '' });
  };

  return (
    <div>
      <h1>Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            {issue.title}: {issue.description}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newIssue.title}
          onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newIssue.description}
          onChange={(e) =>
            setNewIssue({ ...newIssue, description: e.target.value })
          }
        />
        <button type="submit">Add Issue</button>
      </form>
    </div>
  );
}

export default App;
