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

// export const addItemToCart = (cartItems, addItem) => {
//     const existingItem = cartItems.find(cartItem => cartItem.id === addItem.id);

//     if (existingItem) {
//         return cartItems.map(cartItem =>
//             cartItem.id === addItem.id
//                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                 : cartItem
//         );
//     }
//     return [...cartItems, { ...addItem, quantity: 1 }];
// };
