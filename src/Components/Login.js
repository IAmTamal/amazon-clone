import React from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
    return (
        <div className="login">

            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>


            <div className="login__container">
                <h1 className="login__signin">Sign in</h1>

                <form >
                    <h5>E-mail</h5>
                    <input className="login__mail" type="email" name="" id="" />
                    <h5>Password</h5>
                    <input className="login__pass" type="password" />
                    <button className="login__button" type="submit">
                        Sign in
                    </button>
                </form>

                <p className="login__terms">
                    By signing-in you agree to the AMAZON terms and Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice before continuing further.
                </p>
                <button className="login__register">Create your amazon account</button>
            </div>

        </div>
    )
}

export default Login
