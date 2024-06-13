import { Router } from 'express';
import crypto from 'crypto';

const issueRouter = Router();

let issues = [
  {
    id: crypto.randomUUID(),
    title: 'Starter issue',
    description: 'This is a really important issue to track',
  },
];

issueRouter.post('/', async (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    response.status(400).json('Missing title or description fields.');
  }
  const id = crypto.randomUUID();
  const savedIssue = { id, title, description };

  issues.push(savedIssue);
  console.log(issues);

  res.status(201).json(savedIssue);
});

issueRouter.get('/', async (req, res, next) => {
  res.json(issues);
});

issueRouter.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const issue = issues.find((item) => item.id === id);
  if (issue) {
    return res.status(200).json(issue);
  }
  return res.status(404).json('issue not found');
});

issueRouter.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const { title, description } = req.body;
  if (!title || !description) {
    response.status(400).json('Missing title or description fields.');
  }
  const issue = issues.find((item) => item.id === id);
  if (issue) {
    issue.title = title;
    issue.description = description;
    console.log(issues);
    return res.status(200).json(issue);
  }

  return res.status(404).json('issue note found');
});

issueRouter.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  const index = issues.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json('issue note found');
  }
  const removedIssue = issues.splice(index, 1);
  res.status(200).json(removedIssue[0]);
});

export default issueRouter;
