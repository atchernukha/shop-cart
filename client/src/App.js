import { Container } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import { AuthActionCreators } from './store/redusers/auth/actionCreators';


function App() {
      // const {isAuth} = useSelector(state => state.auth)
    const isAuth = true
    console.log("App: isAuth = ", isAuth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AuthActionCreators.check).then(data => {
      dispatch(AuthActionCreators.setUser(data))
      dispatch(AuthActionCreators.setAuth(true))
    })
  }, [])
  return (
    <>
      <Header handleCart={() => {}} />
      <Container sx={{
          mt: '1rem'
          }}>
      <AppRouter isAuth={isAuth} />
      </Container>

    </>
  );
}

export default App;