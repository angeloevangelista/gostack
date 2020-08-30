import { Segments, Joi } from 'celebrate';

export default {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object({
    provider_id: Joi.number().required(),
    date: Joi.date().required(),
  }),
};
