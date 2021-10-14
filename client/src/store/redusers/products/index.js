import { CREATE_BRAND, CREATE_PRODUCT, CREATE_TYPE, DELETE_BRAND, DELETE_PRODUCT, DELETE_TYPE, FETCH_BRANDS, FETCH_PRODUCTS, FETCH_TYPES, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "./types";
const initialState = {
    items: [],
    types: [],
    brands: [],
    size: "",
    sort: "",
    filteredItems: []
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TYPE:            
            return { ...state, types: [...state.types, ...action.payload] };
        case DELETE_TYPE:
            return { ...state, types: action.payload };
        case FETCH_TYPES:
            return { ...state, types: action.payload };
        case CREATE_BRAND:
            return { ...state, brands: [...state.brands, action.payload] };
        case DELETE_BRAND:
            return { ...state, brands: action.payload };
        case FETCH_BRANDS:
            return { ...state, brands: action.payload };
        case CREATE_PRODUCT:
            return { ...state, items: [...state.items, action.payload] };
        case DELETE_PRODUCT:
            return { ...state, items:  action.payload };
        case FETCH_PRODUCTS:
            return { ...state, items: action.payload, filteredItems: action.payload };
        case FILTER_PRODUCTS_BY_SIZE:
            return { ...state, size: action.payload.size, filteredItems: action.payload.items };
        case ORDER_PRODUCTS_BY_PRICE:
            return { ...state, sort: action.payload.sort, filteredItems: action.payload.items };;
        default:
            return state;
    }
}


