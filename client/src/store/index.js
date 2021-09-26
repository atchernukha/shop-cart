import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "./redusers/auth";
import cartReduser from "./redusers/cart";
import productsReducer from "./redusers/products";
import odrerReducer from "./redusers/order";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReduser,
    order: odrerReducer,
})

export const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk) ))