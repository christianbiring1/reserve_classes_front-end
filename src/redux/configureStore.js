import { configureStore } from '@reduxjs/toolkit';
import updateSession from './authentication/authentication';

const store = configureStore({
  reducer: {
    session: updateSession,
  },
});

export default store;
