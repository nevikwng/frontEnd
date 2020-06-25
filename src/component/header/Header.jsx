import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.scss";

// Component-------------------------------
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/Cart-icon";
import CartDropdown from "../cart-dropdown/Cart-dropdown";
import { cartHiddenSelect } from "../../redux/cart/cart-selector";
<<<<<<< HEAD
=======
import HeaderDropdown from "../header-dropdown/HeaderDropdown";

>>>>>>> fcd6c0c155c507860d54c8e286ffb43f0f51a233
// redux action-------------------------------
import { navBarSelect } from "../../redux/nav-bar/navBar-action";
import { shopShowFilterTag } from "../../redux/shop/shop-action";

const Header = ({ navBarSelect, shopShowFilterTag }) => {
  const [subDiv, setSubDiv] = useState(false);
  return (
    <div className="header">
<<<<<<< HEAD
      <div className="sub"></div>
      <div className="main">
        <div className="options" onMouseOver={() => setSubDiv(true)}>
          <Link to="/CartList" className="option">
            CartList
          </Link>
        
        </div>
=======
      <div className="header-spacing" />
      <div
        className={`hamburger-btn ${subDiv ? "hamburger-clicked" : ""}`}
        onClick={() => setSubDiv(!subDiv)}
      >
        <div className="" />
        <div className="" />
        <div className="" />
      </div>
>>>>>>> fcd6c0c155c507860d54c8e286ffb43f0f51a233

      <div className="main">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>

        <div
          className="options"
          onMouseOver={() => {
            // navBarSelect("shop");
            if (subDiv) return;
            // setSubDiv(true);
          }}
        >
          {/* <Link to="/" className="option">
            about
          </Link> */}

          <Link
            to="/shopping"
            className="option"
            onClick={() => {
              shopShowFilterTag("選擇篩選");
              setSubDiv(false);
            }}
            onMouseEnter={() => {
              navBarSelect("shop");
              if (subDiv) return;
              setSubDiv(true);
            }}
          >
            精選商城
          </Link>
          <Link
            to="/courses"
            className="option"
            onClick={() => setSubDiv(false)}
            onMouseEnter={() => {
              navBarSelect("coach");
              if (subDiv) return;
              setSubDiv(true);
            }}
          >
            教練課程
          </Link>
          <Link
            to="/articles"
            className="option"
            onClick={() => setSubDiv(false)}
            onMouseEnter={() => {
              navBarSelect("article");
              if (subDiv) return;
              setSubDiv(true);
            }}
          >
            心得討論
          </Link>
        </div>
      </div>

      <div className="sub sub-cart" onMouseOver={() => setSubDiv(false)}>
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

const mapDispatchToProps = (dispatch) => ({
  navBarSelect: (select) => dispatch(navBarSelect(select)),
  shopShowFilterTag: (tag) => dispatch(shopShowFilterTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
