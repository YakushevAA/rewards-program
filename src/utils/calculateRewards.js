export const calculateRewards = amount => {
  if (amount >= 100) {
    return 2 * (amount - 100) + 50;
  } else if (amount > 50) {
    return amount - 50;
  } else {
    return 0;
  }
};

export const calculateTotalRewardsByCustomer = transactions => {
  return transactions.reduce((total, transaction) => total + calculateRewards(transaction.amount), 0);
};

export const groupTransactionsByCustomerAndMonth = transactions => {
  const customers = {};
  transactions.forEach(transaction => {
    const customerId = transaction.customerId;
    const month = transaction.date.slice(0, 7);
    if (!customers[customerId]) {
      customers[customerId] = {};
    }
    if (!customers[customerId][month]) {
      customers[customerId][month] = [];
    }
    customers[customerId][month].push(transaction);
  });
  return customers;
};
