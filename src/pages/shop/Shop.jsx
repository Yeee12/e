import React from 'react'
import PRODUCTS from '../../products'
import Products from './product'
import "./shop.css"
const Shop = () => {
    return (
        <div className='shop'>
            <div className="Title">
               <h1> Jendor Hub</h1>
            </div>
            <div className="products">
{PRODUCTS.map((product) =>(
<Products data= {product}/>
))}
            </div>
        </div>
    )
}

export default Shop;
