import React, { useState } from 'react'
import { Button, FormHelperText, makeStyles, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const';
import { AuthActionCreators } from '../store/redusers/auth/actionCreators';

const useStyles = makeStyles(theme => ({
    form: {
        maxWidth: theme.spacing(56),
        margin: '0 auto',
        padding: 4,
        marginTop: 30,
    },
    formAction: {
        marginTop: 3,
    }
}))
const Auth = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [form, setForm] = useState({ email: '', password: '' })
    const {isAuth,error} = useSelector(state => state.auth)
    const handleSubmit = () => {
        dispatch(isLogin ? AuthActionCreators.login(form.email, form.password):AuthActionCreators.registration(form.email, form.password))
        console.log("localStorage: ",JSON.parse(localStorage.getItem('user')))
        console.log('State: ',isAuth,error)
        history.push(SHOP_ROUTE)
    }
    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <form className={classes.form}>
            {/* <FormLabel>{isLogin ? 'Login' : 'Registration'}</FormLabel> */}
            <Typography>{isLogin ? 'Login' : 'Registration'}</Typography>
            <TextField
                autoFocus
                margin="dence"
                id="name"
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                fullWidth
                onChange={handleChange}
            />
            <TextField
                margin="dence"
                id="pass"
                label="Password"
                name="password"
                type="password"
                value={form.password}
                fullWidth
                onChange={handleChange}
            />
            {!isLogin &&
                <TextField
                    margin="dence"
                    id="pass1"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    onChange={handleChange}
                />
            }
            <Typography style={{color: 'red'}}>{error}</Typography>
            <FormHelperText className={classes.form}>
            {/* <Typography  >  */}
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <NavLink to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE} variant="body2">
                        {isLogin ? "Sign Up" : "Login"}
            </NavLink>
            <Button variant="outlined" onClick={()=>history.goBack()} color="primary">Cancel</Button>
            <Button color="primary" variant="contained" onClick={handleSubmit} >{isLogin ? 'Login' : 'Register'}</Button>
            </FormHelperText>
            {/* </Typography> */}
        </form>
    )
}

export default Auth