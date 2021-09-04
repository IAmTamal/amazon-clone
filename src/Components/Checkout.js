import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'



function Checkout() {
    const [{ basket }] = useStateValue();


    return (

        //This is literally the checkout page
        //just an ad here.   
        <div className="checkout">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout__image"
                alt="" />

            {/* to check if the basket is full or empty */}
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                    <p>To add one or more items, click "Add to basket" next to the item </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>

                    {/* List of all the products that will be added to basket */}
                    {/* if basket not empty then show the products that were added to the basket */}
                    {/* we are providing the CheckoutProduct with the props from the basket */}

                    {basket.map(item => (
                        <CheckoutProduct
                            item={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                        />
                    ))}
                </div>
            )}




        </div>

    );


}

export default Checkout
