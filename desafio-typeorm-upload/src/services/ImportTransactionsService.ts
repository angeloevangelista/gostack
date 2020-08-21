import csvParse from 'csv-parse';
import fs from 'fs';
import path from 'path';

import { getRepository, getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionsRepository from '../repositories/TransactionsRepository';

class ImportTransactionsService {
  async execute(filename: string): Promise<Transaction[]> {
    const categoriesRepository = getRepository(Category);
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const cvsFilePath = path.resolve(__dirname, '..', '..', 'tmp', filename);

    async function loadCsv(filePath: string): Promise<Array<string[]>> {
      const readCSVStream = fs.createReadStream(filePath);

      const parseStream = csvParse({
        from_line: 2,
        trim: true,
      });

      const parseCSV = readCSVStream.pipe(parseStream);

      const lines: Array<string[]> = [];

      parseCSV.on('data', line => {
        lines.push(line);
      });

      await new Promise(resolve => {
        parseCSV.on('end', resolve);
      });

      return lines;
    }

    /**
     * Verificando as novas catgorias necessárias
     */
    const categories = await categoriesRepository.find();

    const csvContent = await loadCsv(cvsFilePath);

    const categoriesToSave: string[] = [];

    csvContent.forEach(async ([, , , categoryTitle]) => {
      const categoryExistsOnDatabase = categories.find(
        category => category.title === categoryTitle,
      );

      const categoryExistsOnToSave = categoriesToSave.find(
        category => category === categoryTitle,
      );

      if (!categoryExistsOnDatabase && !categoryExistsOnToSave) {
        const category = categoriesRepository.create({
          title: categoryTitle,
        });

        categories.push(category);

        categoriesToSave.push(category.title);
      }
    });

    await categoriesRepository.save(categories);

    /**
     * Criando as transações
     */

    const transactions = csvContent.map(
      ([title, type, value, categoryTitle]) => {
        const category = categories.find(cat => cat.title === categoryTitle);

        const transaction = transactionsRepository.create({
          title,
          type: type as 'income' | 'outcome',
          value: Number(value),
          category_id: category?.id,
        });

        return transaction;
      },
    );

    await transactionsRepository.save(transactions);

    const csvExists = await fs.promises.stat(cvsFilePath);

    if (csvExists) {
      await fs.promises.unlink(cvsFilePath);
    }

    return transactions;
  }
}

export default ImportTransactionsService;
