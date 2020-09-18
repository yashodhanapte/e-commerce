import React from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
                <div className="home__row">
                    <Product
                        key="1"
                        id="12312314"
                        title="The lean startup"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={29.99}
                        rating={5}
                    />
                    <Product
                        key="2"
                        id="12312233314"
                        title="Kenwood kMix Stand Mixer Kenwood kMix Stand Mixer Kenwood kMix Stand Mixer Kenwood kMix Stand Mixer Kenwood kMix Stand Mixer Kenwood kMix Stand Mixer"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={239.99}
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        key="3"
                        id="1234"
                        title="Kenwood kMix Stand Mixer"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={239.99}
                        rating={3} />
                    <Product
                        key="4"
                        id="121"
                        title="Kenwood kMix Stand Mixer"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={9.99}
                        rating={4} />
                    <Product
                        key="5"
                        id="4431"
                        title="Kenwood kMix Stand Mixer"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={439.99}
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product
                        key="6"
                        id="1231486"
                        title="Kenwood kMix Stand Mixer"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={2.99}
                        rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
