"use client";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@mantine/core";
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useProtectRoute } from "@/hooks/useProtectRoute";
import { CheckoutSummary } from "@/app/checkout/CheckoutSummary";

export const PageContent = () => {
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
      <CheckoutSummary />
      <Button fullWidth size="md" onClick={handleClick}>
        Simulate Payment
      </Button>
    </div>
  );
};
