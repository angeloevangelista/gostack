import { Router } from 'express';
import { celebrate } from 'celebrate';
import multer from 'multer';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import DeliveryController from './app/controllers/DeliveryController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryStatusController from './app/controllers/DeliveryStatusController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import SessionValidation from './app/validation/SessionValidation';
import DeliveryValidation from './app/validation/DeliveryValidation';
import RecipientValidation from './app/validation/RecipientValidation';
import DeliverymanValidation from './app/validation/DeliverymanValidation';
import DeliveryStatusValidation from './app/validation/DeliveryStatusValidation';
import DeliveryProblemValidation from './app/validation/DeliveryProblemValidation';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

/**
 * Sessions
 */

routes.post(
  '/sessions',
  celebrate(SessionValidation.create),
  SessionController.create
);

routes.use(authMiddleware);

/**
 * Uploads
 */

routes.post('/files', upload.single('file'), FileController.create);

/**
 * Deliverymans
 */

routes.get(
  '/deliverymans',
  celebrate(DeliverymanValidation.list),
  DeliverymanController.index
);

routes.get(
  '/deliverymans/:deliverymanId',
  celebrate(DeliverymanValidation.find),
  DeliverymanController.find
);

routes.post(
  '/deliverymans',
  celebrate(DeliverymanValidation.create),
  DeliverymanController.create
);

routes.put(
  '/deliverymans/:deliverymanId',
  celebrate(DeliverymanValidation.update),
  DeliverymanController.update
);

routes.delete(
  '/deliverymans/:deliverymanId',
  celebrate(DeliverymanValidation.delete),
  DeliverymanController.delete
);

/**
 * Recipients
 */

routes.post(
  '/recipients',
  celebrate(RecipientValidation.create),
  RecipientController.create
);

routes.get(
  '/recipients',
  celebrate(RecipientValidation.list),
  RecipientController.index
);

routes.put(
  '/recipients/:id',
  celebrate(RecipientValidation.update),
  RecipientController.update
);

/**
 * Deliveries
 */

routes.get(
  '/deliveries',
  celebrate(DeliveryValidation.list),
  DeliveryController.index
);

routes.get(
  '/deliveries/:deliveryId',
  celebrate(DeliveryValidation.find),
  DeliveryController.find
);

routes.post(
  '/deliveries',
  celebrate(DeliveryValidation.create),
  DeliveryController.create
);

/**
 * Deliveries Status
 */

routes.get(
  '/deliverymans/:deliverymanId/deliveries',
  celebrate(DeliveryStatusValidation.list),
  DeliveryStatusController.index
);

routes.put(
  '/deliverymans/:deliverymanId/deliveries/:deliveryId',
  celebrate(DeliveryStatusValidation.update),
  DeliveryStatusController.update
);

/**
 * Delivery Problems
 */

routes.get(
  '/delivery/problems',
  celebrate(DeliveryProblemValidation.list),
  DeliveryProblemController.index
);

routes.get(
  '/delivery/:deliveryId/problems',
  celebrate(DeliveryProblemValidation.find),
  DeliveryProblemController.find
);

routes.post(
  '/delivery/:deliveryId/problems',
  celebrate(DeliveryProblemValidation.create),
  DeliveryProblemController.create
);

routes.delete(
  '/problem/:deliveryProblemId/cancel-delivery',
  celebrate(DeliveryProblemValidation.delete),
  DeliveryProblemController.delete
);

export default routes;
