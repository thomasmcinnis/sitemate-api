import express from 'express';
import cors from 'cors';
import config from './util/config.js';
// import middleware from './util/middleware.js';
import issueRouter from './controllers/issues.js';
// import logger from './util/logger.js';

const app = express();
app.use(cors());
app.use(express.json());
// app.use(middleware.requestLogger);
app.use('/api/issues', issueRouter);

// app.use(middleware.unknownEndpoint);
// app.use(middleware.errorHandler);

export default app;
