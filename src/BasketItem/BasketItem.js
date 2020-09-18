import React from 'react'
import './BasketItem.css';
import StarIcon from '@material-ui/icons/Star';
import CurrencyFormat from 'react-currency-format';

const BasketItem = ({id, title, price, rating, image}) => {

    return (
        <div className="basketItem">
            <img className="basketItem__image" src={image} />

            <div className="basketItem__right">
                <h2>{title}</h2>

                <CurrencyFormat
                    renderText={(value) => (
                        <p className="basketItem__currencyValue">
                            <strong>{value}</strong>
                        </p>
                    )}
                    decimalScale={2}
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                <p>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                </p>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default BasketItem
