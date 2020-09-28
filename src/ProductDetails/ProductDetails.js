import React from 'react'
import './ProductDetails.css';
import {useStateValue} from '../StateProvider';

const ProductDetails = () => {
    const [{selectedProduct}, dispatch] = useStateValue();
    return (
        <div className="productDetails">
            <h1>PRODUCT DETAILS: {selectedProduct?.title}</h1>
        </div>
    )
}

export default ProductDetails
