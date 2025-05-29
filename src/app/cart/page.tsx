"use client";
import { useCart } from "@/contexts/CartContext";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@mantine/core";
import Link from "next/link";
import { OrderSummary } from "@/components/OrderSummary";
import { useProtectRoute } from "@/hooks/useProtectRoute";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart } = useCart();
  const router = useRouter();
  useProtectRoute(router);

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
