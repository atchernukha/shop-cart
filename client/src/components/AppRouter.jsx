import React from 'react';
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/const'

export default function AppRouter({isAuth}) {
    // const {isAuth} = useSelector(state => state.auth)
    // const isAuth = true
    console.log("AppRouter: isAuth = ", isAuth)

    return (
        <Switch>
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={SHOP_ROUTE}></Redirect>
        </Switch>
    )
}
