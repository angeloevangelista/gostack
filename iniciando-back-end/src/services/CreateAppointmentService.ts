import { startOfHour } from 'date-fns';
import { getCustomRepository, getRepository } from 'typeorm';

import Appointment from '../models/Appointment';
import User from '../models/User';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  date: Date;
  provider_id: string;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    // const userRepository = getRepository(User);

    // const provider = await userRepository.findOne(provider_id);

    // if (!provider) {
    //   throw new Error('Provider not found');
    // }

    const appointmentsDate = startOfHour(date);

    const findAppointmentInSameTime = await appointmentsRepository.findByDate(
      appointmentsDate,
    );

    if (findAppointmentInSameTime) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentsDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
