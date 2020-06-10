import React from "react";

import "./cart-item.scss";

const CartItem = ({ cartItem: { imgURL, itemPrice, quantity, itemName } }) => (
  <div className="cart-item">
    <img src={imgURL} alt="" />
    <div className="item-details">
      <span className="name">{itemName}</span>
      <span className="price">
        {quantity} x ${itemPrice}
      </span>
    </div>
  </div>
);

export default CartItem;
