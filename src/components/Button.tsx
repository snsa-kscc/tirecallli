import { useLocalStorage } from "../hooks/useLocalStorage";
import { addItemToStore } from "../store/cartStore";

type ButtonProps = {
  id: number;
  size?: string;
};

type CartItem = {
  id: number;
  quantity: number;
};

export function Button({ id, size }: ButtonProps) {
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
    <button data-item={id} className="button button--cta" onClick={() => increaseCartQuantity(id)}>
      <span>Add to basket</span>
    </button>
  );
}
