"use client";
import { OrderSummary } from "@/components/OrderSummary";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@mantine/core";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useProtectRoute } from "@/hooks/useProtectRoute";

export default function CheckoutPage() {
  const { resetCart } = useCart();
  const router = useRouter();
  useProtectRoute(router);

  const handleClick = () => {
    resetCart();
    router.push("/thank-you");
  };

  return (
    <div className="flex flex-col gap-6">
      <PageTitle>Checkout</PageTitle>
      <OrderSummary
        shouldShowRemoveFromCart={false}
        shouldShowAddToCart={false}
      />
      <Button fullWidth size="md" onClick={handleClick}>
        Simulate Payment
      </Button>
    </div>
  );
}
