"use client";
import { Plan } from "@/app/country/[name]/page";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cart: Plan[];
  addToCart: (item: Plan) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const isAlreadyInCart = (cart: Plan[], item: Plan) => {
  return cart.some((cartItem) => cartItem.id === item.id);
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Plan[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (item: Plan) => {
    if (isAlreadyInCart(cart, item)) return;

    const updatedCart = [...cart, item];
    console.log("updatedCart", updatedCart);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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
