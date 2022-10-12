import { configureStore } from '@reduxjs/toolkit';
import updateSession from './authentication/authentication';
import updateClasses from './classes/classes';
import { updateIsLoading } from './loading/loading';

const store = configureStore({
  reducer: {
    session: updateSession,
    class: updateClasses,
    loading: updateIsLoading,
  },
});

export default store;
