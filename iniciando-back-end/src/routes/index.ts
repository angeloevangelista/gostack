import { Router } from 'express';

import appointmentsRoutes from './appointments.routes';

const routes = Router();

routes.use(appointmentsRoutes);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World' }),
);

export default routes;
