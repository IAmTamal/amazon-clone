import React from 'react'
import "./Products.css";

function Products({ id, title, image, price, rating }) {
    return (
        <div className="products">

            <div className="product__info">
                {/* All the product props here */}

                <p className="product__title">{title}</p>

                <p className="product__price"> <small> ₹</small> <strong>{price}</strong> </p>

                <div className="product__ratings">
                    {Array(rating)
                        .fill()
                        .map((_) => (<p>⭐</p>))}
                </div>

            </div>

            <img src={image} alt="" className="product__image" />

            <button className="product__button">Add to basket</button>

        </div>
    )
}

export default Products
