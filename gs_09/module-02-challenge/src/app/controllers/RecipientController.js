import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async create(req, res) {
    const {
      id,
      name,
      street,
      number,
      complement,
      uf,
      city,
      zipcode,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      uf,
      city,
      zipcode,
    });
  }

  async index(req, res) {
    const { q: queryName } = req.query;

    const recipients = await Recipient.findAll({
      where: queryName
        ? {
            name: {
              [Op.like]: `%${queryName}%`,
            },
          }
        : {},
    });

    return res.json(recipients);
  }

  async update(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(402).json({ error: 'Recipient not found' });
    }

    const {
      name,
      street,
      number,
      complement,
      uf,
      city,
      zipcode,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      uf,
      city,
      zipcode,
    });
  }
}

export default new RecipientController();
