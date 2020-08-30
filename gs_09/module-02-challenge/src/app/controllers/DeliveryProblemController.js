import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import DeliveryProblem from '../models/DeliveryProblem';

import CancellationMail from '../jobs/CancellationMail';

import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async index(req, res) {
    const delivery_problems = await DeliveryProblem.findAll({
      // include: {
      //   model: Delivery,
      //   as: 'delivery',
      // },
    });

    // const deliveries = await Delivery.findAll({
    //   where: {
    //     id: {
    //       [Op.in]: delivery_problems,
    //     },
    //   },
    // });

    return res.json(delivery_problems);
  }

  async find(req, res) {
    const { deliveryId: delivery_id } = req.params;

    const delivery = await Delivery.findByPk(delivery_id, {
      include: {
        model: DeliveryProblem,
        as: 'problems',
      },
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    return res.json(delivery);
  }

  async create(req, res) {
    const { deliveryId: delivery_id } = req.params;

    const { description } = req.body;

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    const delivery_problem = await DeliveryProblem.create({
      delivery_id,
      description,
    });

    return res.json(delivery_problem);
  }

  async delete(req, res) {
    const { deliveryProblemId } = req.params;

    const delivery_problem = await DeliveryProblem.findByPk(deliveryProblemId, {
      attributes: ['id', 'description'],
      include: {
        model: Delivery,
        as: 'delivery',
        attributes: [
          'id',
          'signature_id',
          'product',
          'canceled_at',
          'start_date',
        ],
        include: {
          attributes: ['id', 'name', 'avatar_id', 'email'],
          model: Deliveryman,
          as: 'deliveryman',
        },
      },
    });

    if (!delivery_problem) {
      return res.status(401).json({ error: 'Problem not found' });
    }

    if (delivery_problem.delivery.canceled_at) {
      return res
        .status(428)
        .json({ error: 'This delivery has already been canceled' });
    }

    await delivery_problem.delivery.update({
      canceled_at: new Date(),
    });

    await Queue.add(CancellationMail.key, {
      delivery_problem,
      delivery: delivery_problem.delivery,
      deliveryman: delivery_problem.delivery.deliveryman,
    });

    return res.status(204).send();
  }
}

export default new DeliveryProblemController();
