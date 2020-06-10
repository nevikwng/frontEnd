import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/Cart-item";

import { cartItemsSelect } from "../../redux/cart/cart-selector";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        {cartItems.length ? (
            cartItems.map((cartItem) => (
                <CartItem key={cartItem.itemId} cartItem={cartItem} />
            ))
        ) : (
            <span className="empty-message">Empty Cart</span>
        )}
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelect,
});

export default connect(mapStateToProps)(CartDropdown);
