/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import reserveSlice from './reserveSlice';
import newGroupSlice from './newGroupSlice';
import groupSlice from './groupSlice';

const store = configureStore({
  reducer: {
    reserve: reserveSlice,
    groups: groupSlice,
    newgroups: newGroupSlice,
  },
});

export default store;
