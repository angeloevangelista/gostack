import { Repository, EntityRepository } from 'typeorm';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface BalanceResponse {
  transactions: Transaction[];
  balance: Balance;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<BalanceResponse> {
    const transactions = await this.find();

    const balance: Balance = {
      income: 0,
      outcome: 0,
      total: 0,
    };

    transactions.forEach((transaction: Transaction) => {
      if (transaction.type === 'income') {
        balance.income += transaction.value;
      } else {
        balance.outcome += transaction.value;
      }
    });

    balance.total = balance.income - balance.outcome;

    return {
      transactions,
      balance,
    };
  }
}

export default TransactionsRepository;