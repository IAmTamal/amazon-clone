import React from 'react'
import "./Home.css";
import Products from './Products';

function Home() {
    return (

        <div className="home">

            <img className="home__img" src="https://m.media-amazon.com/images/I/61bRd1hd+CL._SX3000_.jpg" alt="" />

            {/* Product id title price rating image */}
            {/* the products component here  */}

            <Products title="Hello there" />
        </div>
    );
}

export default Home
