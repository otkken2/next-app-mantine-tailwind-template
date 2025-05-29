"use client";

import { useCart } from "@/contexts/CartContext";
import { PlanCardForCartPage } from "../cart/PlanCardForCartPage";
import { ContentsFixedDay } from "../../components/ContentsFixedDay";
import { ContentsPerDay } from "../../components/ContentsPerDay";
import { PACKAGE_TYPE } from "@/types";
import { PurchaseSummaryLayout } from "../../components/PurchaseSummaryLayout";
import { Card } from "@mantine/core";
export const CheckoutSummary = () => {
  const { cart } = useCart();

  return (
    <PurchaseSummaryLayout>
      {cart.length > 0 ? (
        cart.map((plan) => {
          if (plan.packageType === PACKAGE_TYPE.FIXED_DAY) {
            return (
              <Card key={plan.id}>
                <ContentsFixedDay plan={plan} />
              </Card>
            );
          } else {
            return (
              <Card key={plan.id}>
                <ContentsPerDay plan={plan} />
              </Card>
            );
          }
        })
      ) : (
        <div className="text-center">No items in cart</div>
      )}
    </PurchaseSummaryLayout>
  );
};
