import { Segments, Joi } from 'celebrate';

export default {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    provider: Joi.boolean(),
  }),
};
