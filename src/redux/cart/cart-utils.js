export const addShopItemToCart = (cartItems, addItem) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.itemId === addItem.itemId
  );
  if (existCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.itemId === addItem.itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...addItem, quantity: 1 }];
};

export const removeCartItem = (cartItems, itemId) => {
  return cartItems.filter((item) => item.itemId !== itemId);
};

export const unlikeCartItem = (cartFavoriteItems, item) =>
  cartFavoriteItems.filter((cartItem) => cartItem.itemId !== item.itemId);
