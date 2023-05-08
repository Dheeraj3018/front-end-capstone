import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import product from './product.json'


function Example()
{
    return (
        <Carousel >
            {
                product.map(item  => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}



export default Example