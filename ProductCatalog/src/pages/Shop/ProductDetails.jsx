// ProductDetail.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PRODUCTS from '../../products';
import { ShopContext } from '../../context/ShopContext';

const ProductDetail = () => {
    const { id } = useParams(); 
    const { addToCart, cartItems } = useContext(ShopContext);

    const product = PRODUCTS.find((product) => product.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const cartItemAmount = cartItems[id] || 0;

    return (
        <div className='productdet'>
            <img src={product.productImage} className='productimgdet' alt={product.productName} />
            <div className="descriptiondet">
                <p>
                    <b>{product.productName}</b>
                </p>
                <p>{product.description}</p>
                <p>₹{product.price}</p>
            </div>
            <button className='addToCartBttndet' onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
        </div>
    );
};

export default ProductDetail;
