"use client";
import { Plan } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  cart: Plan[];
  addToCart: (item: Plan) => void;
  removeFromCart: (item: Plan) => void;
  resetCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const isAlreadyInCart = (cart: Plan[], item: Plan) => {
  return cart.some((cartItem) => cartItem.id === item.id);
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Plan[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (item: Plan) => {
    if (isAlreadyInCart(cart, item)) return;

    const updatedCart = [...cart, item];
    console.log("updatedCart", updatedCart);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (item: Plan) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const resetCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
