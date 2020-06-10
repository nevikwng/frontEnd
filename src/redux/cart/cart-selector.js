import { createSelector } from "reselect";

const cartSelect = (state) => state.cart;

export const cartHiddenSelect = createSelector(
    [cartSelect],
    (cart) => cart.hidden
);

export const cartItemsSelect = createSelector(
    [cartSelect],
    (cart) => cart.cartItems
);

export const cartCountSelect = createSelector([cartItemsSelect], (cartItems) =>
    cartItems.reduce((accumulatorQ, curQ) => accumulatorQ + curQ.quantity, 0)
);
