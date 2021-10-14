import { Grid} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../components/Item'
import Basket from './Basket';
import { ProductsActionCreators } from '../store/redusers/products/actionCreators'

export default function Shop() {
    const [isCartOpen, setCartOpen] = useState(false)
    const {items, types, brands} = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(ProductsActionCreators.fetchTypes())
        dispatch(ProductsActionCreators.fetchBrands())
        dispatch(ProductsActionCreators.fetchProducts())
    }, [])
    return (<>
        <Grid container spacing={2}
        sx={{mt: '1rem'}}
        >
            <Grid item xs={12} md={4} >
                { items.map(product => <Item  key={product.id} {...product}/>)}
            </Grid>
        </Grid>
        <Basket
        cartOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
      />
    </>
    )
}
