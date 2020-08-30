import { celebrate } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

import authMiddleware from './app/middlewares/auth';

import userCreateSchema from './app/validation/userCreate';
import userUpdateSchema from './app/validation/userUpdate';
import sessionCreateSchema from './app/validation/sessionCreate';
import appointmentCreateSchema from './app/validation/appointmentCreate';
import appointmentDeleteSchema from './app/validation/appointmentDelete';
import appointmentListSchema from './app/validation/appointmentList';
import scheduleListSchema from './app/validation/scheduleList';
import notificationUpdateSchema from './app/validation/notificationUpdate';
import availableListSchema from './app/validation/availableList';

const upload = multer(multerConfig);

const routes = Router();

/**
 * Files
 */
routes.post(
  '/files',
  authMiddleware,
  upload.single('file'),
  FileController.store
);

/**
 * Sessions
 */
routes.post(
  '/sessions',
  celebrate(sessionCreateSchema),
  SessionController.store
);

/**
 * Users
 */
routes.get('/users', UserController.index);

routes.post('/users', celebrate(userCreateSchema), UserController.store);

routes.put(
  '/users',
  celebrate(userUpdateSchema),
  authMiddleware,
  UserController.update
);

/**
 * Providers
 */
routes.get('/providers', authMiddleware, ProviderController.index);
routes.get(
  '/providers/:providerId/available',
  celebrate(availableListSchema),
  authMiddleware,
  AvailableController.index
);

/**
 * Appointments
 */
routes.get(
  '/appointments',
  celebrate(appointmentListSchema),
  authMiddleware,
  AppointmentController.index
);

routes.post(
  '/appointments',
  celebrate(appointmentCreateSchema),
  authMiddleware,
  AppointmentController.store
);

routes.delete(
  '/appointments/:id',
  celebrate(appointmentDeleteSchema),
  authMiddleware,
  AppointmentController.delete
);

/**
 * Schedule
 */
routes.get(
  '/schedule',
  celebrate(scheduleListSchema),
  authMiddleware,
  ScheduleController.index
);

/**
 * Notification
 */
routes.get('/notifications', authMiddleware, NotificationController.index);

routes.put(
  '/notifications/:id',
  celebrate(notificationUpdateSchema),
  authMiddleware,
  NotificationController.update
);

export default routes;
