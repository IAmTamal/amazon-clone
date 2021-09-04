import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import "./Subtotal.css"

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" className="subtotal__input" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button className="subtotal__button">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
