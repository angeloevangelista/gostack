const express = require('express');
const cors = require('cors');

const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid id' });
  }

  request.repositoryId = id;

  return next();
}

app.use('/repositories/:id', validateId);

app.get('/repositories', (request, response) => {
  return response.json(repositories);
});

app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put('/repositories/:id', (request, response) => {
  const { title, url, techs } = request.body;

  const repositoryIndex = repositories.findIndex(
    (repo) => repo.id === request.repositoryId
  );

  if (repositoryIndex === -1) {
    return response.status(400).json({ error: 'Repository not found' });
  }

  repositories[repositoryIndex] = {
    ...repositories[repositoryIndex],
    title,
    url,
    techs,
  };

  return response.json(repositories[repositoryIndex]);
});

app.delete('/repositories/:id', (request, response) => {
  const repositoryIndex = repositories.findIndex(
    (repo) => repo.id === request.repositoryId
  );

  if (repositoryIndex === -1) {
    return response.status(400).json({ error: 'Repository not found' });
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post('/repositories/:id/like', (request, response) => {
  const repositoryIndex = repositories.findIndex(
    (repo) => repo.id === request.repositoryId
  );

  if (repositoryIndex === -1) {
    return response.status(400).json({ error: 'Repository not found' });
  }

  repositories[repositoryIndex].likes = repositories[repositoryIndex].likes + 1;

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
