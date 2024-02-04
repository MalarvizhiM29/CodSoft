import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const {id, productName, description, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
  return (
    <>
        <div className='product'>
            {" "}
            <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'black' }} className="product-link">
            <img src={productImage} className='productimg'/>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>{description}</p>
                <p>₹{price}</p>
            </div>
            </Link>
            <button className='addToCartBttn' onClick={()=> addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
        </div>
    </>
  )
}

export default Product