import { useLocalStorage } from "../hooks/useLocalStorage";
import { increaseCartQuantity } from "../utils/utils";
import { cartQuantityStore } from "../store/cartStore";

type ButtonProps = {
  id: number;
  size?: string;
};

type CartItem = {
  id: number;
  quantity: number;
};

export function Button({ id }: ButtonProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  cartQuantityStore.set(cartQuantity);

  return (
    <button data-item={id} className="button button--cta" onClick={() => increaseCartQuantity(id, setCartItems)}>
      <span>Add to basket</span>
    </button>
  );
}
