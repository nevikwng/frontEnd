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
import HeaderDropdown from "../header-dropdown/HeaderDropdown";

// redux action-------------------------------

const Header = () => {
  const [subDiv, setSubDiv] = useState(false);
  return (
    <div className="header">
      <div className="sub"></div>
      <div className="main">
        <div
          className="options"
          onMouseOver={() => {
            if (subDiv) return;
            setSubDiv(true);
          }}
        >
          <Link to="/" className="option">
            about
          </Link>
        </div>

        <Link to="/" className="logo-container">
          Logo
        </Link>

        <div
          className="options"
          onMouseOver={() => {
            if (subDiv) return;
            setSubDiv(true);
          }}
        >
          <Link
            to="/shopping"
            className="option"
            onClick={() => setSubDiv(false)}
          >
            Shop
          </Link>
        </div>
      </div>

      <div className="sub" onMouseOver={() => setSubDiv(false)}>
        <LikeIcon />
        <CartIcon />
      </div>
      <HeaderDropdown setSubDiv={setSubDiv} subDiv={subDiv} />
      <CartDropdown />
    </div>
  );
};

// redux mapState & mapDispatch
const mapStateToProps = createStructuredSelector({
  hidden: cartHiddenSelect,
});

export default connect(mapStateToProps)(Header);
