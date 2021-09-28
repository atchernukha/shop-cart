import { useState } from 'react';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Basket from './pages/Basket';


function App() {
  const [isCartOpen,setCartOpen] = useState(false)
  return (
    <>
      <Header handleCart={()=>setCartOpen(true)}/>
      <AppRouter />
      <Basket
        cartOpen={isCartOpen}
        closeCart={()=>setCartOpen(false)}
      />
    </>
  );
}

export default App;