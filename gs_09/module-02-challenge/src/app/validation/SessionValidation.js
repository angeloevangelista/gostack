import { Segments, Joi } from 'celebrate';

class SessionValidation {
  constructor() {
    this.create = {
      [Segments.BODY]: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
    };
  }
}

export default new SessionValidation();
