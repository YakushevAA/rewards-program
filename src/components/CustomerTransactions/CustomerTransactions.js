import React from 'react';
import { calculateTotalRewardsByCustomer } from '../../utils/calculateRewards';
import { TransactionsList } from '../TransactionsList'
import './CustomerTransactions.css';

export const CustomerTransactions = ({ customerId, transactions }) => {
  const totalRewards = calculateTotalRewardsByCustomer(Object.values(transactions).flat());
  const months = Object.keys(transactions);
  return (
    <>
      <h2>Customer {customerId}</h2>
      {months.map(month => (
          <div key={month}>
            <h3>{month}</h3>
            <TransactionsList transactions={transactions[month]} />
          </div>
        )
      )}
      <div className="c-CustomersList-total-rewards">Total Rewards: {totalRewards}</div>
    </>
  );
};
