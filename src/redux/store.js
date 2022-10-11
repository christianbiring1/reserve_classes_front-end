/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import reserveSlice from './reserveSlice';
// import/no-named-as-default
import newGroupSlice from './newGroupSlice';
import groupSlice from './groupSlice';
import { newReservationSlice } from './newReservationSlice';

const store = configureStore({
  reducer: {
    reserve: reserveSlice,
    groups: groupSlice,
    newgroups: newGroupSlice,
    newrsv: newReservationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
