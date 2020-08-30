import {
  setHours,
  setMinutes,
  setMilliseconds,
  isBefore,
  isAfter,
  startOfDay,
  endOfDay,
} from 'date-fns';

import { Op } from 'sequelize';
import File from '../models/File';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class DeliveryStatusController {
  async index(req, res) {
    const { deliverymanId } = req.params;

    const { completed } = req.query;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    if (completed) {
      const deliveries = await Delivery.findAll({
        where: {
          deliveryman_id: deliverymanId,
          canceled_at: null,
          end_date: {
            [Op.not]: null,
          },
        },
      });

      return res.json(deliveries);
    }

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: deliverymanId,
        canceled_at: null,
        end_date: null,
      },
    });

    return res.json(deliveries);
  }

  async update(req, res) {
    const { deliverymanId, deliveryId } = req.params;

    const { signature_id, start_date, end_date } = req.body;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    if (delivery.deliveryman_id !== deliverymanId) {
      return res
        .status(401)
        .json({ error: 'You are not permitted to edit this delivery' });
    }

    /**
     * Start dates are only permitted between 8 a.m and 6 p.m.
     */
    if (start_date) {
      const parsed_date = new Date(start_date);

      if (isBefore(parsed_date, new Date())) {
        return res
          .status(400)
          .json({ error: 'Past dates are not permitted for start dates' });
      }

      /**
       * Deliverymans can only have 5 deliveries per day
       */
      const deliveries = await Delivery.findAll({
        where: {
          deliveryman_id: req.params.deliverymanId,
          canceled_at: null,
          start_date: {
            [Op.between]: [startOfDay(parsed_date), endOfDay(parsed_date)],
          },
        },
      });

      if (deliveries.length === 5) {
        return res
          .status(401)
          .json({ error: 'Deliverymans can only have 5 deliveries per day' });
      }

      const initial_hour = setMilliseconds(
        setMinutes(setHours(start_date, 8), 0),
        0
      );
      const final_hour = setMilliseconds(
        setMinutes(setHours(start_date, 18), 0),
        0
      );

      if (
        isBefore(parsed_date, initial_hour) ||
        isAfter(parsed_date, final_hour)
      ) {
        return res.status(400).json({
          error: 'Start dates are only permitted between 8 a.m and 6 p.m.',
        });
      }

      await delivery.update({
        start_date: parsed_date,
      });
    }

    if (end_date) {
      const parsed_date = new Date(end_date);

      await delivery.update({
        end_date: parsed_date,
      });
    }

    /**
     * It checks if the signature exists
     */
    if (signature_id) {
      const signature = await File.findByPk(signature_id);

      if (!signature) {
        return res.status(400).json({ error: 'Signature not found' });
      }

      await delivery.update({
        signature_id,
      });
    }

    return res.json(delivery);
  }
}

export default new DeliveryStatusController();
