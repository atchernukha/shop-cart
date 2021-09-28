import { Divider, Drawer, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'

export default function Basket({ cartOpen, closeCart = Function.prototype, }) {
    return (
        <Drawer
            sx={{ width: 400, }}
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <list>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Cart" />
                </ListItem>
                <Divider />
            </list>
        </Drawer>
    )
}
