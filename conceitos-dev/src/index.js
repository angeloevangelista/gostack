const express = require('express');

const app = express();

const port = 3333;

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port} 🚀️`);
});
