const express = require('express');

const server = express();

server.use(express.json());

const users = [
  {
    id: 1,
    name: 'Angelo'
  },
  {
    id: 2,
    name: 'Tiago'
  },
  {
    id: 3,
    name: 'Lucas'
  },
  {
    id: 4,
    name: 'Maia'
  },
  {
    id: 5,
    name: 'Bruno'
  },
];

function checkFieldExists(req, res, next) { 
  if(!req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  return next();
}

function checkUserExists(req, res, next) {
  const { id } = req.params;

  const user = users.find(user => user.id == id);

  if(!user) {
    res.status(400).json({ error: 'Users does not exist' });
  }

  req.user = user;

  return next();
}

server.use((req, res, next) => {

  console.time('Request');

  console.log({
    Method: req.method,
    Url: req.url,
  });

  next();

  console.timeEnd('Request');
});

server.get('/users', (req, res) => res.json(users));

server.get('/users/:id', checkUserExists, (req, res) => res.json(req.user));

server.post('/users', checkFieldExists, (req, res) => {
  const { name } = req.body;

  const id = users[users.length - 1].id + 1;

  const user = {
    id,
    name
  }

  users.push(user);

  return res.json(user);
});

server.put('/users/:id', checkFieldExists, checkUserExists, (req, res) => {
  const { name } = req.body;

  const user = req.user;

  const index = users.indexOf(user);

  user.name = name;

  users[index].name = name;

  return res.json(user);
});

server.delete('/users/:id', checkUserExists, (req, res) => {
  const user = req.user;

  const index = users.indexOf(user);
  
  users.splice(index, 1);

  return res.status(204).send();
});

server.listen(3333, () => {
  console.clear();
  console.log('Server is running at http://127.0.0.1:3333');
});
