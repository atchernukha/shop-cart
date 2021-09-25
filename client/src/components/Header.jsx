import React from 'react';import { Container,  AppBar, Toolbar, IconButton, Typography, Button, Box} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthActionCreators } from '../store/redusers/auth/actionCreators';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import { ShoppingCartOutlined } from '@material-ui/icons';

// const useStyles = makeStyles(theme => ({
//     menuButton: {
//       marginRight: theme.spacing(1),
//     },
//   }))

export default function Header() {

    const {isAuth} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <AppBar position="static">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start"
              color="inherit" aria-label="menu" >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component="span" sx={{flexGrow: 1}}>Shopping cart</Typography>
            <IconButton edge="start"
              color="inherit" aria-label="menu" >
              <ShoppingCartOutlined />
            </IconButton>
            {isAuth ?
            <Button color="inherit" variant="outlined" onClick={() => dispatch(AuthActionCreators.logout())}>Logout</Button>
            :<>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" component={Link} to={LOGIN_ROUTE}>Log In</Button>
            </Box>
            <Button color="secondary" variant="contained" component={Link} to={REGISTRATION_ROUTE}>Sign Up</Button>
            </>}
          </Toolbar>
          </Container>
      </AppBar>
    )
}
