//rfce for this
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import './Navbar.css';

function Navbar() {
    return (






        <nav className="  header ">

            {/* logo on the left */}
            <Link to="/"><img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>

            {/* searchbox */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>


            {/* 3 links signin return prime */}
            <div className="header__nav">

                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello</span>
                        <span className="header__optionLineTwo">Sign-in</span>
                    </div>
                </Link>


                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& orders</span>
                    </div>
                </Link>


                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Basket logo */}
                        <ShoppingBasketIcon />


                        {/* Basket items number */}
                        <span className="header__optionLineTwo header__basketcount">0</span>
                    </div>
                </Link>
            </div>
        </nav>


    );
}

export default Navbar;
