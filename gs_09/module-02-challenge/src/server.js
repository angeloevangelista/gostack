import app from './app';

import './database';

app.listen(3333, () => {
  console.clear();
  console.log('Server is running at http://127.0.0.1:3333');
});
