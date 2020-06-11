import { cartActionTypes } from "./cart-action-type";

export const taggleCartDropdown = () => ({
  type: cartActionTypes.TAGGLE_CART_DROPDOWN,
});

export const addItemToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (itemId) => ({
  type: cartActionTypes.REOMOVE_ITEM,
  payload: itemId,
});

export const likeCartItem = (item) => ({
  type: cartActionTypes.LIKE_ITEM,
  payload: item,
});

export const unlikeCartItem = (item) => {
  console.log(item);
  return {
    type: cartActionTypes.UNLIKE_ITEM,
    payload: item,
  };
};
