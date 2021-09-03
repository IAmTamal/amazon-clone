import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        //add items to basket using dispatch

        dispatch({
            //remember in reducer we have a switch case of action.type named as ADD_TO_BASKET
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="products">
            <div className="product__info">
                {/* All the product props here */}

                <p className="product__title">{title}</p>

                <p className="product__price">
                    {" "}
                    <small> ₹</small> <strong>{price}</strong>{" "}
                </p>

                <div className="product__ratings">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" className="product__image" />

            <button className="product__button" onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Products;
