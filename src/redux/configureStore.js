import { configureStore } from '@reduxjs/toolkit';
import reserveSlice from './reserveSlice';

const store = configureStore({
  reducer: {
    reserve: reserveSlice,
  },
});

export default store;
