import { cartActionTypes } from "./cart-action-type";

export const taggleCartDropdown = () => ({
    type: cartActionTypes.TAGGLE_CART_DROPDOWN,
});

export const addItemToCart = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item,
});
