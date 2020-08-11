const express = require('express');

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

app.get('/products', (request, response) => {
  const { title, owner } = request.query;

  console.log({ query: { title, owner } });

  return response.json(['Produto 1', 'Produto 2']);
});

app.post('/products', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json(['Produto 1', 'Produto 2', 'Produto 3']);
});

app.put('/products/:id', (request, response) => {
  const { id } = request.params;

  console.log(id);

  return response.json(['Produto 4', 'Produto 2', 'Produto 3']);
});

app.delete('/products/:id', (request, response) => {
  return response.json(['Produto 2', 'Produto 3']);
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port} 🚀️`);
});
