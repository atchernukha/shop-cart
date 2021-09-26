import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types"

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]")
}

export default function cartReduser(state = initialState, action)  {
    switch(action.type) {
        case ADD_TO_CART:
            return({...state, cartItems: action.payload.cartItems});
        case REMOVE_FROM_CART:
            return({...state, cartItems: action.payload.cartItems});
        case CLEAR_CART:
            return({...state, cartItems: []});
        default:
            return(state);
    }
}
