import React from 'react'
import PRODUCTS from '../../products'
import Product from './Product'

const Shop = () => {
  return (
    <>
        <div className='shop'>
            <div className='products'>
                {" "}
                {PRODUCTS.map((product) => (
                    <Product 
                       key={product.id}
                       data={product}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default Shop