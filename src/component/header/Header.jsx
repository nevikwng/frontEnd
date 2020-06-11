import React from "react";
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

const Header = ({ hidden }) => (
  <div className="header">
    <div className="sub"></div>
    <div className="main">
      <div className="options">
        <Link to="/" className="option">
          about
        </Link>
      </div>

      <Link to="/" className="logo-container">
        Logo
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
      </div>
    </div>
    <div className="sub">
      <LikeIcon />
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// redux mapState & mapDispatch
const mapStateToProps = createStructuredSelector({
  hidden: cartHiddenSelect,
});

export default connect(mapStateToProps)(Header);
