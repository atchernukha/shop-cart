import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core'
import React from 'react'

export default function Item({name, price, rating, img}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            sx={{height: 150}}
            image={process.env.REACT_APP_API_HOST+img}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Price: $ {price}
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small" color="primary">
          Add to cart
          </Button>
        </CardActions>
      </Card>
    )
}
