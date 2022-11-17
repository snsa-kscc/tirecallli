import { atom } from "nanostores";

export const cartQuantityStore = atom();

export function addItemToStore(cartItems) {
  const reducedItems = cartItems.reduce((quantity, item) => item.quantity + quantity, 1);
  cartQuantityStore.set(reducedItems);
}
