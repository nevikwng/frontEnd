import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { taggleCartDropdown } from "../../redux/cart/cart-action";
import {
  cartCountSelect,
  cartHiddenSelect,
} from "../../redux/cart/cart-selector";

const CartIcon = ({ taggleCartDropdown, cartCount, hidden }) => (
  <div
    className="cart-icon"
    onMouseOver={() => {
      if (hidden) return;
      taggleCartDropdown();
    }}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartCount: cartCountSelect,
  hidden: cartHiddenSelect,
});

const mapDispatchToProps = (dispatch) => ({
  taggleCartDropdown: () => dispatch(taggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
