import React from 'react';
import { calculateRewards } from '../../utils/calculateRewards';
import { calculateTotalRewardsByCustomer } from '../../utils/calculateRewards';
import './TransactionsList.css';

export const TransactionsList = ({ transactions }) => {
  const monthlyTotal = calculateTotalRewardsByCustomer(transactions);
  return (
    <table className="c-TransactionsList-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Rewards</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>${transaction.amount.toFixed(2)}</td>
            <td>{calculateRewards(transaction.amount)}</td>
          </tr>
        ))}
        <tr className="c-TransactionsList-monthly-total">
          <td colSpan="2">Total for month:</td>
          <td>{monthlyTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};
