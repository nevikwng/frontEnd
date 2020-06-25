import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.scss";

// Component-------------------------------
import CartIcon from "../cart-icon/Cart-icon";
import CartDropdown from "../cart-dropdown/Cart-dropdown";
import LikeIcon from "../like-icon/LikeIcon";
import { cartHiddenSelect } from "../../redux/cart/cart-selector";
// redux action-------------------------------

const Header = ({ hidden }) => {
  const [subDiv, setSubDiv] = useState(false);
  return (
    <div className="header">
      <div className="sub"></div>
      <div className="main">
        <div className="options" onMouseOver={() => setSubDiv(true)}>
          <Link to="/CartList" className="option">
            CartList
          </Link>
        
        </div>

        <Link to="/" className="logo-container">
          Logo
        </Link>

        <div className="options" onMouseOver={() => setSubDiv(true)}>
          <Link
            to="/shopping"
            className="option"
            onClick={() => setSubDiv(false)}
          >
            Shop
          </Link>
        </div>
      </div>
      <div className="sub">
        <LikeIcon />
        <CartIcon />
      </div>
      <div
        className={`${subDiv ? "show-sub-div" : ""} sub-div`}
        onMouseLeave={() => setSubDiv(false)}
      >
        <Link to="/shop/men" className="" onClick={() => setSubDiv(false)}>
          Men
        </Link>
        <Link to="/shop/women" className="" onClick={() => setSubDiv(false)}>
          Women
        </Link>
        <Link to="/shop/food" className="" onClick={() => setSubDiv(false)}>
          Food
        </Link>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// redux mapState & mapDispatch
const mapStateToProps = createStructuredSelector({
  hidden: cartHiddenSelect,
});

export default connect(mapStateToProps)(Header);
