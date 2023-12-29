import React from 'react';
import { CustomerTransactions } from '../CustomerTransactions';
import { useGetTransactionsQuery } from '../../features/rewards/rewardsApi';
import { Loader } from '../common/Loader';

export const CustomersList = () => {
  const { data: customers, isLoading, isError, error } = useGetTransactionsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div className="error">Error: {error.toString()}</div>;
  }

  if (!customers) {
    return <div>No transactions available.</div>;
  }

  return (
    <>
      {Object.keys(customers).map(customerId => (
        <CustomerTransactions key={customerId} customerId={customerId} transactions={customers[customerId]} />
      ))}
    </>
  );
};
