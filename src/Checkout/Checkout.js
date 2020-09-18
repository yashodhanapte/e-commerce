import React from 'react'
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import BasketItem from '../BasketItem/BasketItem';
import {useStateValue} from '../StateProvider';

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {/* BasketItem */}
                    {basket.length > 0 ?
                        basket?.map(item => (
                            <BasketItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                        : <p>Your basket is empty</p>
                    }

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
