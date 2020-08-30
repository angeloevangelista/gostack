import { Segments, Joi } from 'celebrate';

export default {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().min(1),
  }),
};
