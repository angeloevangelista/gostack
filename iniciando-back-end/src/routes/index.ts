import { Router } from 'express';

import appointmentsRoutes from './appointments.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use(appointmentsRoutes);
routes.use(usersRoutes);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World' }),
);

export default routes;
