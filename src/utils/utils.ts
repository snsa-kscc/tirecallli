export function increaseCartQuantity(id: number, setCartItems) {
  setCartItems((currItems) => {
    if (currItems.find((item) => item.id === id) == null) {
      return [...currItems, { id, quantity: 1 }];
    } else {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
  });
}

export function decreaseCartQuantity(id: number, setCartItems) {
  setCartItems((currItems) => {
    if (currItems.find((item) => item.id === id)?.quantity === 1) {
      return currItems.filter((item) => item.id !== id);
    } else {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
  });
}

export function removeFromCart(id: number, setCartItems) {
  setCartItems((currItems) => {
    return currItems.filter((item) => item.id !== id);
  });
}
