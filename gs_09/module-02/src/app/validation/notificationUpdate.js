import { Segments, Joi } from 'celebrate';

export default {
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().required().min(1),
  }),
};
