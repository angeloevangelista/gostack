import { Segments, Joi } from 'celebrate';

export default {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    avatar_id: Joi.number(),
    oldPassword: Joi.string(),
    password: Joi.when('oldPassword', {
      then: Joi.string().required(),
    }),
    confirmPassword: Joi.when('oldPassword', {
      then: Joi.string().required().equal(Joi.ref('password')),
    }),
  }),
};
