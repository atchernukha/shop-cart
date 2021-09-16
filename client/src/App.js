import { Container, AppBar, Toolbar, IconButton, Typography, Button, Box, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthActionCreators } from './store/redusers/auth/actionCreators';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/const';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    merginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

function App() {
  const classes = useStyles()
  const {isAuth} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start"
              color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>Shopping-card</Typography>
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
      <Toolbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
