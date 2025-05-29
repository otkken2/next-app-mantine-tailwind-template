"use client";

import { CartSummary } from "@/app/cart/CartSummary";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useProtectRoute } from "@/hooks/useProtectRoute";

export const PageContent = () => {
  const { cart } = useCart();
  const router = useRouter();
  useProtectRoute(router);

  return (
    <div className="flex flex-col gap-6">
      <PageTitle>Cart</PageTitle>
      <CartSummary />
      {cart.length > 0 && (
        <Link href="/checkout">
          <Button fullWidth size="md">
            Proceed to Checkout
          </Button>
        </Link>
      )}
    </div>
  );
};
