import express from 'express';

import db from './db.json';

const server = express();

server.listen(process.env.PORT || 3333);

server.get('/products', (req, res) => res.json(db.products));
server.get('/products/:id', (req, res) =>
  res.json(db.products.find((p) => p.id === Number(req.params.id)))
);

server.get('/stock', (req, res) => res.json(db.stock));
server.get('/stock/:id', (req, res) =>
  res.json(db.stock.find((s) => s.id === Number(req.params.id)))
);
