import 'reflect-metadata';

import { resolve } from 'path';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';

import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.warn(err.message);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.use('/files', express.static(resolve(__dirname, '..', '..', 'tmp')));

app.listen(3333, () => {
  console.log('Server is running at http://localhost:3333 🚀');
});
