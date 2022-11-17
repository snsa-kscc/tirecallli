import { useStore } from "@nanostores/react";
import { cartQuantityStore } from "./cartStore";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartItem = {
  id: number;
  quantity: number;
};

export function CartIcon() {
  return <p>{useStore(cartQuantityStore)}</p>;
}
