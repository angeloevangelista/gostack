import { Router } from 'express';

import appointmentsRoutes from './routes.appointments';

const routes = Router();

routes.use(appointmentsRoutes);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World' }),
);

export default routes;
