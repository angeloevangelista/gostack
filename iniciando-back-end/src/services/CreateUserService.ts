import { hash } from 'bcryptjs';

import { getRepository } from 'typeorm';

import User from '../models/User';

interface Response {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Response): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: {
        email,
      },
    });

    if (checkUserExists) {
      throw new Error('Email address is already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
