import React from 'react'
import "./Products.css";

function Products({ id, title, image, price, rating }) {
    return (
        <div className="products">
            <p>{title}</p>
        </div>
    )
}

export default Products
