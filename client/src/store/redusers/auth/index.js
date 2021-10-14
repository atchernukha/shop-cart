import { SET_AUTH, SET_USER, SET_ERROR } from "./types";


const initialState = {
    isAuth: false,
    user: {},
    error: '',
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isAuth: action.payload };
        case SET_USER:
            return { ...state, user: action.payload };
        case SET_ERROR:
            return  { ...state, error: action.payload };
        default:
            return state;
    }
}


