"use client";

import { useCart } from "@/contexts/CartContext";
import { PlanCardForCartPage } from "./PlanCardForCartPage";
import { ContentsFixedDay } from "../../components/ContentsFixedDay";
import { ContentsPerDay } from "../../components/ContentsPerDay";
import { PACKAGE_TYPE } from "@/types";
import { PurchaseSummaryLayout } from "../../components/PurchaseSummaryLayout";

export const CartSummary = () => {
  const { cart } = useCart();

  return (
    <PurchaseSummaryLayout>
      {cart.length > 0 ? (
        cart.map((plan) => {
          if (plan.packageType === PACKAGE_TYPE.FIXED_DAY) {
            return (
              <PlanCardForCartPage key={plan.id} plan={plan}>
                <ContentsFixedDay plan={plan} />
              </PlanCardForCartPage>
            );
          } else {
            return (
              <PlanCardForCartPage key={plan.id} plan={plan}>
                <ContentsPerDay plan={plan} />
              </PlanCardForCartPage>
            );
          }
        })
      ) : (
        <div className="text-center">No items in cart</div>
      )}
    </PurchaseSummaryLayout>
  );
};
