import { increaseCartQuantity, decreaseCartQuantity, removeFromCart } from "../utils/utils";
import { useLocalStorage } from "../hooks/useLocalStorage";
import storeItems from "../data/inventory.json";
import { cartQuantityStore } from "../store/cartStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type CartItem = {
  id: number;
  quantity: number;
};

export function ShoppingCart() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  const [parent, enableAnimations] = useAutoAnimate<any>();
  cartQuantityStore.set(cartQuantity);

  if (cartQuantity) {
    return (
      <div className="bag flex">
        <div className="bag__group bag__content">
          <h2>Bag</h2>
          <div ref={parent}>
            {cartItems.map((cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return (
                <div key={cartItem.id} className="bag__item flex">
                  <img src={item.imgUrl} className="pic" alt="tirecalli-picture" />
                  <div className="bag__description">
                    <div>{item.name}</div>
                    <div className="bag__item-price">
                      Item price: {item.price}€ {cartItem.quantity > 1 && <span className="bag__item-quantity">x quantity {cartItem.quantity}</span>}
                    </div>
                    <div className="bag__item-price">Item total: {item.price * cartItem.quantity}€</div>
                    <div className="bag__buttons">
                      <button className="button button--size" onClick={() => increaseCartQuantity(cartItem.id, setCartItems)}>
                        <span>+</span>
                      </button>
                      <button className="button button--size" onClick={() => decreaseCartQuantity(cartItem.id, setCartItems)}>
                        <span>-</span>
                      </button>
                      <button className="button button--size" onClick={() => removeFromCart(cartItem.id, setCartItems)}>
                        <span className="trash"></span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bag__group bag__summary">
          <h2>Summary</h2>
          <div>
            Subtotal:{" "}
            {cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
            €
          </div>
          <div>Delivery and Handling: 5€</div>
          <div className="bag__total">
            Total:{" "}
            {cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 5)}
            €
          </div>
          <div className="paypal" id="paypal-button-container"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="empty">
      <h2>Bag</h2>
      <p>There are no items in your bag.</p>
      <div className="hidden" id="paypal-button-container"></div>
    </div>
  );
}
