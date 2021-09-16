import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "./redusers/auth";

const rootReducer = combineReducers({
    auth: authReducer,
})

export const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk) ))