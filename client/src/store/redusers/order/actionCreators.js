import { $authHost } from "../http";
// import jwt_decode from "jwt-decode";
import { CLEAR_ORDER, CREATE_ORDER } from "./types";
import { CartActionCreators } from "../cart/actionCreators";

export const OrderActionCreators = {
    createOrder: order => async dispatch => {
        const { data } = await $authHost.post('/orders', JSON.stringify(order))
        dispatch({ type: CREATE_ORDER, data });
        // const user = jwt_decode(data.token)
        localStorage.clear("cartItems");
        dispatch(CartActionCreators.clearCart());
    }, 
    clearOrder: () => dispatch => dispatch({ type: CLEAR_ORDER }),
}
