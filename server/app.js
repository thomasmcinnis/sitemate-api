import express from 'express';
import cors from 'cors';
import issueRouter from './controllers/issues.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/issues', issueRouter);

export default app;
