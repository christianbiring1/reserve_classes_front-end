import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import updateSession from './authentication/authentication';
import updateClasses from './classes/classes';
import { updateIsLoading } from './loading/loading';

const persistConfig = {
  key: 'session',
  storage,
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const reducer = combineReducers({
  session: updateSession,
});

const persistedSession = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    class: updateClasses,
    loading: updateIsLoading,
    persistedSession,
  },
  middleware: customizedMiddleware,
});

export default store;
