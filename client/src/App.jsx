import { useState, useEffect } from 'react';
import {
  getAllIssues,
  deleteIssue,
  updateIssue,
  createIssue,
} from './services/api';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({ title: '', description: '' });
  const [currentIssue, setCurrentIssue] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleDelete = async (id) => {
    await deleteIssue(id);
    fetchIssues();
  };

  const handleUpdate = async (issue) => {
    setCurrentIssue(issue);
    setShowModal(true);
  };

  const saveUpdatedIssue = async (e) => {
    e.preventDefault();
    await updateIssue(currentIssue.id, currentIssue);
    setShowModal(false);
    fetchIssues();
  };

  return (
    <div>
      <h1>Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            {issue.title}: {issue.description}
            <button onClick={() => handleDelete(issue.id)}>Delete</button>
            <button onClick={() => handleUpdate(issue.id)}>Update</button>
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
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <form onSubmit={saveUpdatedIssue}>
          <input
            type="text"
            placeholder="Title"
            value={currentIssue?.title || ''}
            onChange={(e) =>
              setCurrentIssue({ ...currentIssue, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={currentIssue?.description || ''}
            onChange={(e) =>
              setCurrentIssue({ ...currentIssue, description: e.target.value })
            }
          />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
