import React from "react";
import { connect } from "react-redux";

import "./cart-item.scss";
import {
  removeItemFromCart,
  unlikeCartItem,
} from "../../redux/cart/cart-action";

const CartItem = ({ cartItem, removeItemFromCart, fav, unlikeCartItem }) => {
  const { img1, price, quantity, name, itemId, flavor } = cartItem;
  return (
    <div className="cart-item">
      <img
        onClick={() => {
          if (fav) {
            unlikeCartItem(cartItem);
          } else {
            removeItemFromCart(itemId);
          }
        }}
        className="cart-item-delete"
        src="https://img.icons8.com/color/48/000000/cancel--v1.png"
        alt=""
      />
      <img className="cart-item-img" src={img1} alt="" />
      <div className="item-details">
        <span className="name">
          {name} <span>({flavor})</span>
        </span>
        <span className="price">
          {`${quantity ? quantity + " x " : ""}`}${price}
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
  unlikeCartItem: (itemId) => dispatch(unlikeCartItem(itemId)),
});

export default connect(null, mapDispatchToProps)(React.memo(CartItem));
