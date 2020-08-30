import { Op } from 'sequelize';

import File from '../models/File';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

import CreationMail from '../jobs/CreationMail';

import Queue from '../../lib/Queue';

class DeliveryController {
  async index(req, res) {
    const { q: queryName } = req.query;

    const deliveries = await Delivery.findAll({
      include: [
        {
          model: File,
          as: 'signature',
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name', 'street', 'number', 'uf', 'city'],
        },
      ],
      ...(queryName
        ? {
            where: {
              product: {
                [Op.like]: `%${queryName}%`,
              },
            },
          }
        : {}),
    });

    // const deliveries = await Delivery.findAll({
    //   include: {
    //     model: Deliveryman,
    //     as: 'deliveryman',
    //     attributes: ['id', 'name'],
    //   },
    //   where: !queryName
    //     ? null
    //     : {
    //         product: {
    //           [Op.like]: `%${queryName}%`,
    //         },
    //       },
    // });

    return res.json(deliveries);
  }

  async find(req, res) {
    const { deliveryId } = req.params;

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    return res.json(delivery);
  }

  async create(req, res) {
    const { recipient_id, deliveryman_id, signature_id } = req.body;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found' });
    }

    if (signature_id) {
      const signature = await File.findByPk(signature_id);

      if (!signature) {
        return res.status(400).json({ error: 'Signature not found' });
      }
    }

    const delivery = await Delivery.create(req.body);

    await Queue.add(CreationMail.key, {
      deliveryman,
      recipient,
      delivery,
    });

    return res.json(delivery);
  }
}

export default new DeliveryController();
