import { useShoppingCart } from "../context/ShoppingCartContext";

type ButtonProps = {
  id?: number;
  size: string;
};

export function Button({ id, size }: ButtonProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

  return (
    <button className="button button--size button--flex" onClick={() => increaseCartQuantity(222)}>
      <span>{size}</span>
    </button>
  );
}
