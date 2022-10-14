/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
// import/no-named-as-default
import newGroupSlice from './newGroupSlice';
import groupSlice from './groupSlice';
import { newReservationSlice } from './newReservationSlice';

const store = configureStore({
  reducer: {
    groups: groupSlice,
    newgroups: newGroupSlice,
    newrsv: newReservationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
