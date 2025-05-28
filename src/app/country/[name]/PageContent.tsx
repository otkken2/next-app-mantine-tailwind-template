"use client";

import { useState } from "react";
import { PackageType, PACKAGE_TYPE, Plan } from "./page";
import { Button, Card } from "@mantine/core";
import { useCart } from "@/contexts/CartContext";

interface Props {
  fixedDayPlans: Plan[];
  perDayPlans: Plan[];
}
export const PageContent = ({ fixedDayPlans, perDayPlans }: Props) => {
  const [displayedPlanType, setDisplayedPlanType] = useState<PackageType>(
    PACKAGE_TYPE.FIXED_DAY,
  );
  const isFixedDay = displayedPlanType === PACKAGE_TYPE.FIXED_DAY;
  const isPerDay = displayedPlanType === PACKAGE_TYPE.PER_DAY;
  return (
    <div className="w-full flex flex-col gap-8 h-full">
      <div className="flex w-full">
        <Button
          radius="xs"
          variant={isFixedDay ? "filled" : "light"}
          className={`${isFixedDay ? "font-bold" : ""} w-full`}
          onClick={() => setDisplayedPlanType(PACKAGE_TYPE.FIXED_DAY)}
        >
          Fixed Data Plans
        </Button>
        <Button
          radius="xs"
          variant={isPerDay ? "filled" : "light"}
          className={`${isPerDay ? "font-bold" : ""} w-full`}
          onClick={() => setDisplayedPlanType(PACKAGE_TYPE.PER_DAY)}
        >
          Per Day Plans
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {isFixedDay &&
          fixedDayPlans.map((plan) => {
            return <PlanCard key={plan.id} plan={plan} isFixedDay />;
          })}
        {isPerDay &&
          perDayPlans.map((plan) => {
            return <PlanCard key={plan.id} plan={plan} />;
          })}
      </div>
    </div>
  );
};

const PlanCard = ({
  plan,
  isFixedDay = false,
}: {
  plan: Plan;
  isFixedDay?: boolean;
}) => {
  const { addToCart } = useCart();
  return (
    <Card className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
      <div>
        <p>
          Plan Name{isFixedDay && " (Duration)"}: {plan.name}
        </p>
        <p>Price: ${plan.price}</p>
        <p>
          Data Volume: {plan.dataVolume} {plan.dataUnit}
        </p>
      </div>
      {/* <Button onClick={() => console.log("addToCart", plan)}> */}
      <Button onClick={() => addToCart(plan)}>Add to Cart</Button>
    </Card>
  );
};
