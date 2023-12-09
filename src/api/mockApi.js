import { mockTransactions } from './mockData';

export const fetchTransactions = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 2000);
  });
};