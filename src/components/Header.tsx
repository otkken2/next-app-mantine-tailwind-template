"use client";
import Link from "next/link";
import { IconShoppingCartFilled } from "@tabler/icons-react";
import { useCart } from "@/contexts/CartContext";
export const Header = () => {
  const { cart } = useCart();
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <Link href="/" className="text-2xl font-bold">
        eSIM Store
      </Link>
      <Link href="/cart" className="relative">
        <IconShoppingCartFilled size={24} />
        {cart.length > 0 && (
          <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs w-4 h-4 p-1 rounded-full flex items-center justify-center">
            {cart.length}
          </div>
        )}
      </Link>
    </header>
  );
};
