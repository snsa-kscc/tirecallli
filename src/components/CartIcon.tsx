import { useStore } from "@nanostores/react";
import { cartQuantityStore } from "../store/cartStore";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartItem = {
  id: number;
  quantity: number;
};

export function CartIcon() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const total: any = useStore(cartQuantityStore);

  return <>{total ? <p>{total}</p> : cartQuantity != 0 ? <p>{cartQuantity}</p> : <p></p>}</>;
}
