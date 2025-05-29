"use client";
import { Plan } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { Card, Button } from "@mantine/core";

interface Props {
  plan: Plan;
  children: React.ReactNode;
}

export const PlanCardForCartPage = ({ plan, children }: Props) => {
  const { removeFromCart } = useCart();
  return (
    <Card className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
      {children}
      <Button color="red" onClick={() => removeFromCart(plan)}>
        Remove from Cart
      </Button>
    </Card>
  );
};
