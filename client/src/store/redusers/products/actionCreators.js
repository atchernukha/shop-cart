import { $host } from "../http";
// import jwt_decode from "jwt-decode";
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "./types";


export const ProductsActionCreators = {
    fetchProducts: () => async dispatch => {
        try {
            const { products } = await $host.get('/products',)
            // localStorage.setItem('auth', 'true')
            localStorage.setItem('products', JSON.stringify(products))
            // dispatch(AuthActionCreators.setError(''))
            // console.log("localStorage: ",JSON.parse(localStorage.getItem('user')))
            // console.log(getState().auth.user)
            dispatch({ type: FETCH_PRODUCTS, products })
        } catch (e) {
            // dispatch(AuthActionCreators.setError('Fetch products error'))
            console.error('Fetch products error.......', e)
        }
    },
    filterProducts: (products, size) => dispatch => {
        dispatch({
            type: FILTER_PRODUCTS_BY_SIZE,
            size: size,
            items: size === ""
                ? products
                : products.filter(x => x.availableSizes.indexOf(size) >= 0)

        })
    },
    orderProductsByPrice: (filteredProducts, sort) => dispatch => { 
        const sortedProducts = filteredProducts.slice();
        if (sort === "latest") {
            sortedProducts.sort((a, b) => a.id > b.id ? 1 : -1)
        } else {
            sortedProducts.sort((a, b) => (
                sort === "lowest"
                    ? a.price > b.price ? 1 : -1
                    : a.price > b.price ? -1 : 1
            ))
        }
        dispatch({
            type: ORDER_PRODUCTS_BY_PRICE, 
            sort: sort,
            items: sortedProducts
        })
    }
}
