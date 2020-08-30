const express = require('express');

const server = express();

server.use(express.json());
server.use(logRequests);

const projects = [];

function logRequests(req, res, next) {
  console.count("Número de requisições");

  return next();
}

function checkIdExists(req, res, next) {
  let { id } = req.body;

  if (!id) {
    id = req.params.id;
  }

  if (!id) {
    return res.status(400).json({ error: 'Id is required' });
  }

  req.id = id;

  return next();
}

function checkTitleExists(req, res, next) {
  let { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  req.title = title;

  return next();
}

function checkProjectExists(req, res, next) {
  const project = projects.find(project => project.id == req.id);

  const index = projects.indexOf(project);

  req.index = index;

  return next();
}

server.get('/projects', (req, res) => res.json(projects));

server.get('/projects/:id', checkIdExists, (req, res) => {

  const { id } = req.params;

  const project = projects.find(project => project.id == id);

  return res.json(project);
});

server.post('/projects', checkIdExists, checkTitleExists, checkProjectExists, (req, res) => {

  if (req.index != -1) {
    return res.json({ error: 'Project already exists' });
  }

  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: [],
  }

  projects.push(project);

  return res.json(project);
});

server.delete('/projects/:id', checkIdExists, checkProjectExists, (req, res) => {
  if (req.index == -1) {
    return res.status(400).json({ error: 'Project does not found' });
  }

  projects.splice(req.index, 1);

  return res.status(204).send();
});

server.put('/projects/:id', checkIdExists, checkTitleExists, checkProjectExists, (req, res) => {
  if (req.index == -1) {
    return res.json({ error: 'Project does not exist' });
  }

  const { title } = req.body;

  projects[req.index].title = title;

  return res.json(projects[req.index]);
});

server.post('/projects/:id/tasks', checkIdExists, checkTitleExists, checkProjectExists, (req, res) => {
  if (req.index == -1) {
    return res.status(400).json({ error: 'Project does not exist' });
  }

  const { title } = req.body;

  projects[req.index].tasks.push(title);

  return res.json(projects[req.index]);
});

server.listen(3333, () => {
  // console.clear();
  console.log('Server is running at http://127.0.0.1:3333');
});
