import { Segments, Joi } from 'celebrate';

export default {
  [Segments.QUERY]: Joi.object({
    date: Joi.date().required(),
  }),
};
