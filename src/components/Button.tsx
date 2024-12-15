import { useLocalStorage } from "../hooks/useLocalStorage";
import { increaseCartQuantity } from "../utils/utils";
import { cartQuantityStore } from "../store/cartStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

type ButtonProps = {
  id: number;
};

type CartItem = {
  id: number;
  quantity: number;
};

export function Button({ id }: ButtonProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  cartQuantityStore.set(cartQuantity);

  const handleClick = () => {
    increaseCartQuantity(id, setCartItems);
    toast("Item added into the bag!", {
      position: "top-right",
    });
  };

  return (
    <>
      <button className="button button--cta" onClick={handleClick}>
        <span>Add to bag</span>
      </button>
      <ToastContainer toastClassName="bag-toast__container" bodyClassName="bag-toast__body" />
    </>
  );
}
