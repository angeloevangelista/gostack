import { Segments, Joi } from 'celebrate';

class DeliveryStatusValidation {
  constructor() {
    this.list = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.PARAMS]: Joi.object({
        deliverymanId: Joi.number().min(1).required(),
      }),
      [Segments.QUERY]: Joi.object({
        completed: Joi.bool(),
      }),
    };

    this.update = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.PARAMS]: Joi.object({
        deliverymanId: Joi.number().min(1).required(),
        deliveryId: Joi.number().min(1).required(),
      }),
      [Segments.BODY]: Joi.object({
        signature_id: Joi.number().min(1),
        start_date: Joi.date(),
        end_date: Joi.date(),
      }),
    };
  }
}

export default new DeliveryStatusValidation();
