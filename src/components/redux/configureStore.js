import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import groupReducer from './Groups/GroupReducer';

const rootReducer = combineReducers({
  groups: groupReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [applyMiddleware(thunk)],
});

export const useStore = () => store;
export const useDispatch = () => store.dispatch;
export const useSelector = () => store.select;
export default store;
