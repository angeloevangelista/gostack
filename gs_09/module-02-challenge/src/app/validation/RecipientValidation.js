import { Segments, Joi } from 'celebrate';

class RecipientValidation {
  constructor() {
    this.create = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.BODY]: Joi.object({
        name: Joi.string().required(),
        street: Joi.string().required(),
        number: Joi.number(),
        complement: Joi.string(),
        uf: Joi.string().length(2).required(),
        city: Joi.string().required(),
        zipcode: Joi.string().required(),
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

    this.update = {
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.PARAMS]: Joi.object({
        id: Joi.number().required(),
      }),
      [Segments.BODY]: Joi.object({
        name: Joi.string(),
        street: Joi.string(),
        number: Joi.number(),
        complement: Joi.string(),
        uf: Joi.string().length(2),
        city: Joi.string(),
        zipcode: Joi.string(),
      }),
    };
  }
}

export default new RecipientValidation();
