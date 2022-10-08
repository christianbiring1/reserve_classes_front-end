/* eslint-disable*/
import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import groupsReducer from '../Groups/GroupReducer';

const rootReducer = combineReducers({
  groups: groupsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [applyMiddleware(thunk)],
  middleware: [thunk],
});

export const useStore = () => store;
export const useDispatch = () => store.dispatch;
export const useSelector = () => store.select;
export default store;
