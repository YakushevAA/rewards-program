import { calculateRewards, calculateTotalRewardsByCustomer, groupTransactionsByCustomerAndMonth } from '../calculateRewards';

describe('calculateRewards.js', () => {
  describe('calculateRewards', () => {
    it('correctly calculates rewards based on amount', () => {
      expect(calculateRewards(120)).toBe(90);
      expect(calculateRewards(80)).toBe(30);
      expect(calculateRewards(50)).toBe(0);
    });
  });

  describe('calculateTotalRewardsByCustomer', () => {
    it('correctly calculates total rewards for a customer', () => {
      const transactions = [
        { amount: 120 },
        { amount: 80 },
        { amount: 50 },
      ];
      expect(calculateTotalRewardsByCustomer(transactions)).toBe(120);
    });
  });

  describe('groupTransactionsByCustomerAndMonth', () => {
    it('correctly groups transactions by customer and month', () => {
      const transactions = [
        { customerId: 1, date: '2023-01-05', amount: 120 },
        { customerId: 1, date: '2023-02-15', amount: 200 },
        { customerId: 2, date: '2023-01-11', amount: 190 },
      ];
      const expectedOutput = {
        1: {
          '2023-01': [{ customerId: 1, date: '2023-01-05', amount: 120 }],
          '2023-02': [{ customerId: 1, date: '2023-02-15', amount: 200 }],
        },
        2: {
          '2023-01': [{ customerId: 2, date: '2023-01-11', amount: 190 }],
        },
      };
      expect(groupTransactionsByCustomerAndMonth(transactions)).toEqual(expectedOutput);
    });
  });
});
