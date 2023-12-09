import React, { useMemo } from 'react';
import { CustomerTransactions } from '../CustomerTransactions';
import { groupTransactionsByCustomerAndMonth} from '../../utils/calculateRewards';

export const CustomersList = ({ transactions }) => {
  const customers = useMemo(() => groupTransactionsByCustomerAndMonth(transactions), [transactions]);

  return (
    <>
      {Object.keys(customers).map(customerId => (
        <CustomerTransactions key={customerId} customerId={customerId} transactions={customers[customerId]} />
      ))}
    </>
  );
};
