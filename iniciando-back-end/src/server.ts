import 'reflect-metadata';

import { resolve } from 'path';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/files', express.static(resolve(__dirname, '..', '..', 'tmp')));

app.listen(3333, () => {
  console.log('Server is running at http://localhost:3333 🚀');
});
