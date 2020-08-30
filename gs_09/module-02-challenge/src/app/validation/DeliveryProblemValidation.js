import { Segments, Joi } from 'celebrate';

class DeliveryProblemValidation {
  constructor() {
    this.list = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    };

    this.find = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.PARAMS]: Joi.object({
        deliveryId: Joi.number().min(1),
      }),
    };

    this.create = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.PARAMS]: Joi.object({
        deliveryId: Joi.number().min(1),
      }),
      [Segments.BODY]: Joi.object({
        description: Joi.string().required(),
      }),
    };

    this.delete = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.PARAMS]: Joi.object({
        deliveryProblemId: Joi.number().min(1),
      }),
    };
  }
}

export default new DeliveryProblemValidation();
