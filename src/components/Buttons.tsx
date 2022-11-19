import { useLocalStorage } from "../hooks/useLocalStorage";
import { increaseCartQuantity } from "../utils/utils";
import { cartQuantityStore } from "../store/cartStore";

type CartItem = {
  id: number;
  quantity: number;
};

export function Buttons({ items }) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  cartQuantityStore.set(cartQuantity);

  return (
    <>
      {items.map((item) => (
        <button key={item.id} data-item={item.id} className="button button--size button--flex" onClick={() => increaseCartQuantity(item.id, setCartItems)}>
          <span>{item.size}</span>
        </button>
      ))}
    </>
  );
}
