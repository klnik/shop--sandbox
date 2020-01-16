export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existing) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item }
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const index = cartItems.indexOf(cartItemToRemove);
  if (index > -1) {
    cartItems.splice(index, 1);
    return [...cartItems];
  }
};

export const decreaseItemCount = (cartItems, cartItemToDecreaseCount) => {
  const existing = cartItems.find(
    item => item.id === cartItemToDecreaseCount.id
  );
  if (existing.quantity === 1) {
    return removeItemFromCart(cartItems, cartItemToDecreaseCount);
  }
  return cartItems.map(item =>
    item.id === cartItemToDecreaseCount.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
