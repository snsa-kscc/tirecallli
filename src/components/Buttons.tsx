import { useLocalStorage } from "../hooks/useLocalStorage";
import { addItemToStore } from "../store/cartStore";

type CartItem = {
  id: number;
  quantity: number;
};

export function Buttons({ items }) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);

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
    addItemToStore(cartItems);
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
