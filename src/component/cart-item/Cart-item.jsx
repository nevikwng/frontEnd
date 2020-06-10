import React from "react";

import "./cart-item.scss";

const CartItem = ({ cartItem: { img1, price, quantity, name } }) => (
  <div className="cart-item">
    <img src={img1} alt="" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
