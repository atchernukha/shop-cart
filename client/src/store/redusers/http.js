import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer S{localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)


export {
    $host,
    $authHost
}