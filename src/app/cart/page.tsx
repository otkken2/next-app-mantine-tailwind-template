"use client";
import { useCart } from "@/contexts/CartContext";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@mantine/core";
import Link from "next/link";
import { OrderSummary } from "@/components/OrderSummary";
export default function CartPage() {
  const { cart } = useCart();
  return (
    <div className="flex flex-col gap-6">
      <PageTitle>Cart</PageTitle>
      <OrderSummary
        shouldShowRemoveFromCart={true}
        shouldShowAddToCart={false}
      />
      {cart.length > 0 && (
        <Link href="/checkout">
          <Button fullWidth size="md">
            Proceed to Checkout
          </Button>
        </Link>
      )}
    </div>
  );
}
