import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import groupsReducer from "./Groups/AddGroup";
const rootReducer = combineReducers({
    groups:groupsReducer
    })
    const store = configureStore({
        reducer:rootReducer,
        middleware:[applyMiddleware(thunk)],
        middleware:[thunk]
    })

export const useStore = () => store;
export const useDispatch = () => store.dispatch;
export const useSelector = () => store.select;
export default store;
