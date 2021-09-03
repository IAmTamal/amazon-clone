import React from 'react'
import "./Home.css";
import Products from './Products';

function Home() {
    return (

        <div className="home">

            <img className="home__img" src="https://m.media-amazon.com/images/I/61bRd1hd+CL._SX3000_.jpg" alt="" />

            {/* Product id title price rating image */}
            {/* the products component here  */}

            <div className="home__productsRow">
                <Products title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
                    price={100.2} id="1" rating={5}
                    image="https://m.media-amazon.com/images/I/81lGGiahJTS._SL1500_.jpg" />
                <Products title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
                    price={100.2} id="1" rating={5}
                    image="https://m.media-amazon.com/images/I/81lGGiahJTS._SL1500_.jpg" />
                <Products title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
                    price={100.2} id="1" rating={5}
                    image="https://m.media-amazon.com/images/I/81lGGiahJTS._SL1500_.jpg" />
            </div>

        </div>
    );
}

export default Home
