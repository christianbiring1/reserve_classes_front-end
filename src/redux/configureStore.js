import { configureStore } from '@reduxjs/toolkit';
import updateSession from './authentication/authentication';
import updateClasses from './classes/classes';

const store = configureStore({
  reducer: {
    session: updateSession,
    class: updateClasses,
  },
});

export default store;
