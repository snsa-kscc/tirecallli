import { useLocalStorage } from "../hooks/useLocalStorage";
import { cartQuantityStore } from "./cartStore";

type CartItem = {
  id: number;
  quantity: number;
};

export function Buttons({ items }) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 1);

  function increaseCartQuantity(id: number) {
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
    cartQuantityStore.set(cartQuantity);
  }

  return (
    <>
      {items.map((item) => (
        <button key={item.id} data-item={item.id} className="button button--size button--flex" onClick={() => increaseCartQuantity(item.id)}>
          <span>{item.size}</span>
        </button>
      ))}
    </>
  );
}
