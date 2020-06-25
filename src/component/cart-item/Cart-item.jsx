import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-item.scss";
import {
  removeItemFromCart,
  unlikeCartItem,
  taggleCartDropdown,
} from "../../redux/cart/cart-action";
import { useHistory } from "react-router-dom";
import { cartHiddenSelect } from "../../redux/cart/cart-selector";

const CartItem = ({
  cartItem,
  removeItemFromCart,
<<<<<<< HEAD
}) => (
    <div className="cart-item">
      <img
        onClick={() => removeItemFromCart(itemId)}
        className="cart-item-delete"
        src="https://img.icons8.com/color/48/000000/cancel--v1.png"
        alt=""
      />
      <img className="cart-item-img" src={img1} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
=======
  fav,
  unlikeCartItem,
  taggleCartDropdown,
}) => {
  const {
    img1,
    price,
    quantity,
    name,
    itemId,
    flavor,
    itemCollection,
    hidden,
  } = cartItem;
  const history = useHistory();
  return (
    <div
      className="cart-item"
      onClick={() => {
        if (hidden) return;
        taggleCartDropdown();
        history.push(`/shopitem/${itemCollection}/${itemId}`);
      }}
    >
      <img className="cart-item-img" src={img1} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="flavor">({flavor})</span>
        <span className="price">
          {`${quantity ? quantity + " x " : ""}`}${price}
        </span>
        <span
          className="delete"
          onClick={(event) => {
            event.stopPropagation();
            if (fav) {
              unlikeCartItem(cartItem);
            } else {
              removeItemFromCart(itemId);
            }
          }}
        >
          移除
>>>>>>> fcd6c0c155c507860d54c8e286ffb43f0f51a233
        </span>
      </div>
    </div>
  );
<<<<<<< HEAD
=======
};

const mapStateToProps = createStructuredSelector({
  hidden: cartHiddenSelect,
});
>>>>>>> fcd6c0c155c507860d54c8e286ffb43f0f51a233

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
  unlikeCartItem: (itemId) => dispatch(unlikeCartItem(itemId)),
  taggleCartDropdown: () => dispatch(taggleCartDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(CartItem));
