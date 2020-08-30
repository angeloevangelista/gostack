import { Segments, Joi } from 'celebrate';

export default {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.PARAMS]: Joi.object({
    providerId: Joi.number().required(),
  }),
  [Segments.QUERY]: Joi.object({
    date: Joi.date().required(),
  }),
};
