import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { taggleCartDropdown } from "../../redux/cart/cart-action";
import { cartCountSelect } from "../../redux/cart/cart-selector";

const CartIcon = ({ taggleCartDropdown, cartCount }) => (
    <div className="cart-icon" onClick={taggleCartDropdown}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartCount: cartCountSelect,
});

const mapDispatchToProps = (dispatch) => ({
    taggleCartDropdown: () => dispatch(taggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
