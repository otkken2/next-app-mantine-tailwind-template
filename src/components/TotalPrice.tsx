"use client";
import { useCart } from "@/contexts/CartContext";

export const TotalPrice = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    cart.length > 0 && (
      <div className="flex gap-4 justify-end">
        <p className="text-2xl font-bold">Total:</p>
        <p className="text-2xl font-bold">${Math.round(total * 100) / 100}</p>
      </div>
    )
  );
};
