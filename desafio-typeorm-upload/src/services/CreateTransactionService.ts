import { getRepository, getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Category from '../models/Category';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    category: categoryTitle,
    title,
    type,
    value,
  }: Request): Promise<Transaction> {
    const categoriesRepository = getRepository(Category);
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const balance = await transactionsRepository.getBalance();

    if (type === 'outcome' && balance.total - value < 0) {
      throw new AppError('The balance cannot be minus than zero.');
    }

    const existentCategory = await categoriesRepository.findOne({
      where: {
        title: categoryTitle,
      },
    });

    const category = !existentCategory
      ? categoriesRepository.create({
          title: categoryTitle,
        })
      : existentCategory;

    if (!existentCategory) {
      await categoriesRepository.save(category);
    }

    const transaction = transactionsRepository.create({
      title,
      type,
      value,
      category_id: category.id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
