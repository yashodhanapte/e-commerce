import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../StateProvider';
import {ADD_TO_BASKET} from '../actions';

const Product = ({id, title, image, price, rating}) => {

    // const [state, dispatch] = useStateValue();
    const [{basket}, dispatch] = useStateValue();
    console.log(' basket', basket);
    const addToBasket = () => {
        dispatch({
            type: ADD_TO_BASKET,
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}

                </div>
            </div>
            {/* 
            <div className="product__image">
            </div> */}
            <img src={image} />

            <button
                className="addButton"
                onClick={addToBasket}
            >
                Add to Basket
            </button>
        </div>
    )
}

export default Product
