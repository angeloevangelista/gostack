import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import User from '../models/User';

class DeliverymanController {
  async index(req, res) {
    const { q: queryName } = req.query;

    const deliverymans = await Deliveryman.findAll({
      where: queryName
        ? {
            name: {
              [Op.like]: `%${queryName}%`,
            },
          }
        : {},
    });

    return res.json(deliverymans);
  }

  async find(req, res) {
    const { deliverymanId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    return res.json(deliveryman);
  }

  async create(req, res) {
    const { email } = req.body;

    const user = await User.findByPk(req.userId);

    if (!user) {
      return res
        .status(401)
        .json({ error: 'Only administrators can add deliverymans' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: {
        email,
      },
    });

    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const { deliverymanId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliverymand not found' });
    }

    const { id, name, email, avatar_id } = await deliveryman.update(req.body);

    return res.json({ id, name, email, avatar_id });
  }

  async delete(req, res) {
    const { deliverymanId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliverymand not found' });
    }

    await deliveryman.destroy();

    return res.status(204).send();
  }
}

export default new DeliverymanController();
