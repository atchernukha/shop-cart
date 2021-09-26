import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types"



export const CartActionCreators = {
    addToCart: product => (dispatch, getState) => {
        const cartItems = getState().cart.cartItems.slice();
        let alreadyExists = false;
        cartItems.forEach(x => {
            if (x._id === product._id) {
                alreadyExists = true;
                x.count++;
            }
        });
        if (!alreadyExists) {
            cartItems.push({ ...product, count: 1 });
        }
        dispatch({ type: ADD_TO_CART, cartItems });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },
    removeFromCart: product => (dispatch, getState) => {
        const cartItems = getState().cart.cartItems.slice().filter(x => x._id !== product._id);
        dispatch({ type: REMOVE_FROM_CART, cartItems });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },
    clearCart: () => ({ type: CLEAR_CART })
}
