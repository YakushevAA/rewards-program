import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchTransactions } from '../../api/mockApi';
import { groupTransactionsByCustomerAndMonth } from '../../utils/calculateRewards'

const baseQuery = async (arg, api, extraOptions) => {
  try {
    const result = await fetchTransactions();
    return { data: result };
  } catch (error) {
    return { error };
  }
};

export const rewardsApi = createApi({
  reducerPath: 'rewardsApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => 'transactions',
      transformResponse: (response) => {
        return groupTransactionsByCustomerAndMonth(response);
      },
    }),
  }),
});

export const { useGetTransactionsQuery } = rewardsApi;
