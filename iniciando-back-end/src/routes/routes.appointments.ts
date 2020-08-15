import { Router } from 'express';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const routes = Router();

routes.get('/appointments', (request, response) => {
  const appointments = AppointmentsRepository.all();

  return response.json(appointments);
});

routes.post('/appointments', (request, response) => {
  const { date, provider } = request.body;

  const appointment = AppointmentsRepository.create({
    date,
    provider,
  });

  return response.json(appointment);
});

export default routes;
