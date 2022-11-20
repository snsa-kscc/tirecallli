import styles from "./ShoppingCart.module.css";
import { increaseCartQuantity, decreaseCartQuantity, removeFromCart } from "../utils/utils";
import { useLocalStorage } from "../hooks/useLocalStorage";
import storeItems from "../data/inventory.json";
import { cartQuantityStore } from "../store/cartStore";

type CartItem = {
  id: number;
  quantity: number;
};

export function ShoppingCart() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  cartQuantityStore.set(cartQuantity);

  if (cartQuantity) {
    return (
      <>
        <h2>Bag</h2>
        {cartItems.map((cartItem) => {
          const item = storeItems.find((i) => i.id === cartItem.id);
          return (
            <div key={cartItem.id}>
              <img src={item.imgUrl} className={styles.pic} alt="tirecalli-picture" />
              <div>{item.name}</div>
              <div>
                Item price: {item.price}€ {cartItem.quantity > 1 && <span>x quantity {cartItem.quantity}</span>}
              </div>
              <div>Item total: {item.price * cartItem.quantity}€</div>
              <button className={styles.btn} onClick={() => increaseCartQuantity(cartItem.id, setCartItems)}>
                plus
              </button>
              <button className={styles.btn} onClick={() => decreaseCartQuantity(cartItem.id, setCartItems)}>
                minus
              </button>
              <button className={styles.btn} onClick={() => removeFromCart(cartItem.id, setCartItems)}>
                remove
              </button>
            </div>
          );
        })}
        <div>
          Subtotal:{" "}
          {cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}
          €
        </div>
        <div>Delivery and Handling: 5€</div>
        <div>
          Total:{" "}
          {cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 5)}
          €
        </div>
        <div id="paypal-button-container"></div>
      </>
    );
  }
  return (
    <div>
      <p>Bag</p>
      <p>There are no items in your bag.</p>
      <div className="hidden" id="paypal-button-container"></div>
    </div>
  );
}
