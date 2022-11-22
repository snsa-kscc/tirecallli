import { useLocalStorage } from "../hooks/useLocalStorage";
import { increaseCartQuantity } from "../utils/utils";
import { cartQuantityStore } from "../store/cartStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
        <button
          key={item.id}
          className="button button--size button--flex"
          onClick={() => {
            increaseCartQuantity(item.id, setCartItems);
            toast("Item added into the bag!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }}
        >
          <span>{item.size}</span>
        </button>
      ))}
      <ToastContainer toastClassName="bag-toast__container" bodyClassName="bag-toast__body" />
    </>
  );
}
