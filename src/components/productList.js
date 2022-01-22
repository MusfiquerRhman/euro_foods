import React from 'react'
import Product from './product'
import Grid from '@mui/material/Grid';

export default function ProductsList({listOfItems}) {
    return (
        <div>
            <Grid container spacing={3} sx={{marginTop:"1rem"}}>
                {listOfItems.map(product => (
                    <Grid item xs={12} sm={6} md={4} xl={3}  key={product.id}>
                        <Product {...product} key={product.PRODUCT_ID}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
