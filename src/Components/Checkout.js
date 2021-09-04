import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'



function Checkout() {
    const [{ basket }] = useStateValue();


    return (


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
                </div>
            )}




        </div>

    );


}

export default Checkout
