import {Card, Typography, CardContent, CardActions, CardMedia, Button} from '@mui/material'
import React from 'react'

function ProductCard({i}) {
  return (
    <div key={i?.id}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={i?.img}
                title={`image ${i?.title}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {i?.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {i?.description}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    $ {i?.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained'>Ver Detalle</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default ProductCard