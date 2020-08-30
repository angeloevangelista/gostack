import { Segments, Joi } from 'celebrate';

class DeliverymanValidation {
  constructor() {
    this.create = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.BODY]: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
      }),
    };

    this.list = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.QUERY]: Joi.object({
        q: Joi.string(),
      }),
    };

    this.find = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.PARAMS]: Joi.object({
        deliverymanId: Joi.number().required(),
      }),
    };

    this.update = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.PARAMS]: Joi.object({
        deliverymanId: Joi.number().min(1).required(),
      }),
      [Segments.BODY]: Joi.object({
        name: Joi.string(),
        email: Joi.string().email().required(),
      }),
    };

    this.delete = {
      [Segments.PARAMS]: Joi.object({
        deliverymanId: Joi.number().min(1).required(),
      }),
    };
  }
}

export default new DeliverymanValidation();
