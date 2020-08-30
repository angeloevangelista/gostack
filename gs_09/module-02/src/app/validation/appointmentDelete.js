import { Segments, Joi } from 'celebrate';

export default {
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required().min(1),
  }),
};
