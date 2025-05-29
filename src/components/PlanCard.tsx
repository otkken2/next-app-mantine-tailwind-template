import { Plan } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { Card, Button } from "@mantine/core";

export const PlanCard = ({
  plan,
  isFixedDay = false,
  isPerDay = false,
  shouldShowAddToCart = true,
  shouldShowRemoveFromCart = false,
}: {
  plan: Plan;
  isFixedDay?: boolean;
  isPerDay?: boolean;
  shouldShowAddToCart?: boolean;
  shouldShowRemoveFromCart?: boolean;
}) => {
  const { addToCart, removeFromCart } = useCart();
  return (
    <Card className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
      <div>
        <p>
          <span className="font-bold">
            Plan Name
            {isFixedDay && " (Duration)"}
          </span>
          : {plan.name}
        </p>
        <p>
          <span className="font-bold">Price</span>: ${plan.price}
        </p>
        <p>
          <span className="font-bold">Data Volume</span>: {plan.dataVolume}{" "}
          {plan.dataUnit}
        </p>
        {isPerDay && (
          <p>
            <span className="font-bold">Duration</span>: {plan.validityDays}{" "}
            {plan.validityDaysCycle}
          </p>
        )}
      </div>
      {shouldShowAddToCart && (
        <Button onClick={() => addToCart(plan)}>Add to Cart</Button>
      )}
      {shouldShowRemoveFromCart && (
        <Button color="red" onClick={() => removeFromCart(plan)}>
          Remove from Cart
        </Button>
      )}
    </Card>
  );
};
