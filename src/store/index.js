import { configureStore } from '@reduxjs/toolkit';
import { rewardsApi } from '../features/rewards/rewardsApi';

export const store = configureStore({
  reducer: {
    [rewardsApi.reducerPath]: rewardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rewardsApi.middleware),
});