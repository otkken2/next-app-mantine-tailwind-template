import { Card, Button } from "@mantine/core";
import React from "react";
import { Plan } from "@/types";
import { useCart } from "@/contexts/CartContext";

interface Props {
  children: React.ReactNode;
  plan: Plan;
}
export const PlanCardForAdd = ({ children, plan }: Props) => {
  const { addToCart } = useCart();
  return (
    <Card className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
      {children}
      <Button onClick={() => addToCart(plan)}>Add to Cart</Button>
    </Card>
  );
};
