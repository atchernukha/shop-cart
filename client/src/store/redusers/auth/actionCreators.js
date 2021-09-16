import { $host } from "../http";
import jwt_decode from "jwt-decode";
import { SET_AUTH, SET_USER, SET_ERROR } from "./types";


export const AuthActionCreators = {
    setAuth : payload => ({type: SET_AUTH, payload}),
    setUser: payload => ({type: SET_USER, payload}),
    setError: payload => ({type: SET_ERROR, payload}),
    login: (email, password) => async dispatch => {
        try {
            const {data} = await $host.post('/user/login', {email, password})
                const user = jwt_decode(data.token)
                localStorage.setItem('auth','true')
                localStorage.setItem('user',JSON.stringify(user))
                dispatch(AuthActionCreators.setAuth(true))
                dispatch(AuthActionCreators.setUser(user))
                dispatch(AuthActionCreators.setError(''))
                // console.log("localStorage: ",JSON.parse(localStorage.getItem('user')))
                // console.log(getState().auth.user)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Email or password nod valid'))
            console.log('ERROR...........', e)
        }
    },
    registration: (email, password) => async dispatch => {
        try {
            const {data} = await $host.post('/user/registration', {email, password, "role": "ADMIN"})
            const user = jwt_decode(data.token)
            localStorage.setItem('auth','true')
            localStorage.setItem('user',JSON.stringify(user))
            dispatch(AuthActionCreators.setAuth(true))
            dispatch(AuthActionCreators.setUser(user))
            dispatch(AuthActionCreators.setError(''))
        } catch {
            dispatch(AuthActionCreators.setError('Email or password nod valid'))
        }
    },
    logout: () => dispatch => {
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        dispatch(AuthActionCreators.setAuth(false))
        dispatch(AuthActionCreators.setUser({}))
        dispatch(AuthActionCreators.setError(''))
    }
}
