import { Segments, Joi } from 'celebrate';

class DeliverymanValidation {
  constructor() {
    this.create = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
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
        deliveryId: Joi.number().min(1).required(),
      }),
    };
  }
}

export default new DeliverymanValidation();
