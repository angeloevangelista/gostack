const express = require('express');
const { v4 } = require('uuid');

const app = express();

app.use(express.json());

const port = 3333;

/**
 * Métodos HTTP
 *
 * GET: Buscar informações
 * POST: Criar informações
 * PUT: Atualizar informações
 * DELETE: Remover informações
 */

/**
 * Tipos de parãmetros
 *
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualiza/Excluir)
 * Body Params: Conteúdo usado para criar/editar um recurso (JSON)
 */

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const projects = title
    ? projects.filter((proj) => proj.title.includes(title))
    : projects;

  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: v4(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((proj) => proj.id === id);

  if (projectIndex === -1) {
    return response.status(400).json({ error: 'Project not found' });
  }

  projects[projectIndex] = {
    ...projects[projectIndex],
    title,
    owner,
  };

  return response.json(projects[projectIndex]);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((proj) => proj.id === id);

  if (projectIndex === -1) {
    return response.status(400).json({ error: 'Project not found' });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port} 🚀️`);
});
