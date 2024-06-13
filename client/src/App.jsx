import { useState, useEffect } from 'react';
import {
  getAllIssues,
  getIssueById,
  deleteIssue,
  updateIssue,
} from './services/api';
import './App.css';

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const issues = await getAllIssues();
    setIssues(issues);
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
    </div>
  );
}

export default App;
