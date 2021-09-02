//rfce for this
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import './Navbar.css';

function Navbar() {
    return (
        <div>



            {/* basket */}

            <nav className="header">
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
                    <Link to="/login" className="header__link1">
                        <div className="header__option">
                            <span>Hello</span>
                            <span>Sign-in</span>
                        </div>
                    </Link>


                    {/* 2nd link */}
                    <Link to="/login" className="header__link1">
                        <div className="header__option">
                            <span>Returns</span>
                            <span>& orders</span>
                        </div>
                    </Link>


                    {/* 3rd link */}
                    <Link to="/login" className="header__link1">
                        <div className="header__option">
                            <span>Your</span>
                            <span>Prime</span>
                        </div>
                    </Link>

                    {/* 1st link */}
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
