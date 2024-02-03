import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext';

const Product = (props) => {

    const {id, productName, description, price, productImage} = props.data;
    const { addToCart } = useContext(ShopContext)

  return (
    <>
        <div className='product'>
            {" "}
            <img src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>{description}</p>
                <p>{price}</p>
            </div>
            <button className='addToCartBttn' onClick={()=> addToCart(id)}>Add To Cart</button>
        </div>
    </>
  )
}

export default Product