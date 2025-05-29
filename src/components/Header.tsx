"use client";
import Link from "next/link";
import { IconShoppingCartFilled } from "@tabler/icons-react";
import { useCart } from "@/contexts/CartContext";

import { Button } from "@mantine/core";
import Image from "next/image";
import { useUser } from "@/contexts/UserContext";

export const Header = () => {
  const { cart } = useCart();
  const { user, signInWithGoogle, signOut } = useUser();

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <Link href="/" className="text-2xl font-bold">
        eSIM Store
      </Link>
      <div className="flex items-center gap-4">
        {user === null ? (
          <Button variant="outline" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Image
              src={user.photoURL ?? ""}
              className="rounded-full"
              alt="user"
              width={32}
              height={32}
            />
            <Button variant="outline" onClick={signOut}>
              Sign out
            </Button>
          </div>
        )}
        <Link href="/cart" className="relative">
          <IconShoppingCartFilled size={24} />
          {cart.length > 0 && (
            <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs w-4 h-4 p-1 rounded-full flex items-center justify-center">
              {cart.length}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};
