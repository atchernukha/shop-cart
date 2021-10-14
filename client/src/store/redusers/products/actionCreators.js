import { $authHost, $host } from "../http";
// import jwt_decode from "jwt-decode";
import { CREATE_BRAND, CREATE_PRODUCT, CREATE_TYPE, DELETE_BRAND, DELETE_PRODUCT, DELETE_TYPE, FETCH_BRANDS, FETCH_PRODUCTS, FETCH_TYPES, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "./types";


export const ProductsActionCreators = {
    createType: type  =>  async dispatch => {
        try {
            const { data } = await $authHost.post('/type', {name: type})
            // console.log(data);
            dispatch({type: CREATE_TYPE, payload: data})
        } catch (e) {
            console.error('Create type products error.......', e)
        }
    },
    fetchTypes: () => async dispatch => {
        try {
            const { data } = await $host.get('/type')
            dispatch({type: FETCH_TYPES, payload: data})
        } catch (e) {
            console.error('Fetch types products error.......', e)
        }
    },
    deleteType: (id) => async (dispatch, getState) => {
        try {
            const { data } = await $authHost.delete('/type', id)
            const types = getState().types
            dispatch({type: DELETE_TYPE, payload: types.map(type => type.id !== id )})
            return data
        } catch (e) {
            console.error('Delete type products error.......', e)
        }
    },
    createBrand: brand  => async dispatch => {
        try {
            const { data } = await $authHost.post('/brand', {name: brand} )
            dispatch({type: CREATE_BRAND, data})
        } catch (e) {
            console.error('Create brand products error.......', e)
        }
    },
    fetchBrands: () => async dispatch => {
        try {
            const { data } = await $host.get('/brand')
            dispatch({type: FETCH_BRANDS, payload: data})
        } catch (e) {
            console.error('Fetch brands products error.......', e)
        }
    },
    deleteBrand: (id) => async (dispatch, getState) => {
        try {
            const { data } = await $authHost.delete('/brand', id)
            const brands = getState().brands
            dispatch({type: DELETE_BRAND, payload: brands.map(brand => brand.id !== id )})
        } catch (e) {
            console.error('Delete brand products error.......', e)
        }
    },
    createProduct: () => async dispatch => {
        try {
            const { data } = await $host.get('/item')
            dispatch({ type: CREATE_PRODUCT, payload: data})
        } catch (e) {
            // dispatch(AuthActionCreators.setError('Fetch products error'))
            console.error('Fetch products error.......', e)
        }
    },
    deleteProduct: (id) => async (dispatch, getState) => {
        try {
            const { data } = await $host.delete('/item', id)
            const products = getState().products
            dispatch({ type: DELETE_PRODUCT, payload: products.map(product => product.id !== id )})
        } catch (e) {
            // dispatch(AuthActionCreators.setError('Fetch products error'))
            console.error('Fetch products error.......', e)
        }
    },
    fetchOneProduct: (id) => async dispatch => {
        try {
            const { data } = await $host.get('/item/'+id)
            // dispatch({ type: FETCH_PRODUCTS, payload: data.rows})
        } catch (e) {
            // dispatch(AuthActionCreators.setError('Fetch products error'))
            console.error('Fetch products error.......', e)
        }
    },
    fetchProducts: () => async dispatch => {
        try {
            const { data } = await $host.get('/item',)
            // localStorage.setItem('auth', 'true')
            // localStorage.setItem('products', JSON.stringify(products))
            // dispatch(AuthActionCreators.setError(''))
            // console.log("localStorage: ",JSON.parse(localStorage.getItem('user')))
            // console.log(getState().auth.user)
            dispatch({ type: FETCH_PRODUCTS, payload: data.rows})
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
