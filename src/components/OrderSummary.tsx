"use client";
import { PlanCard } from "./PlanCard";
import { useCart } from "@/contexts/CartContext";

interface Props {
  shouldShowRemoveFromCart: boolean;
  shouldShowAddToCart: boolean;
}
export const OrderSummary = ({
  shouldShowRemoveFromCart,
  shouldShowAddToCart,
}: Props) => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {cart.length > 0 ? (
          cart.map((item) => (
            <PlanCard
              key={item.id}
              plan={item}
              isFixedDay={item.packageType === "FIXED_DAY"}
              isPerDay={item.packageType === "PER_DAY"}
              shouldShowRemoveFromCart={shouldShowRemoveFromCart}
              shouldShowAddToCart={shouldShowAddToCart}
            />
          ))
        ) : (
          <div className="text-center">No items in cart</div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="flex gap-4 justify-end">
          <p className="text-2xl font-bold">Total:</p>
          <p className="text-2xl font-bold">${Math.round(total * 100) / 100}</p>
        </div>
      )}
    </div>
  );
};
