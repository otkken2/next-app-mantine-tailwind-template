"use client";

import { Select } from "@mantine/core";
import { Plan } from "./page";

interface Props {
  plan: Plan;
}

export const PlanCard = ({ plan }: Props) => {
  return (
    <div key={plan.id} className="border-b border-gray-500 pb-4">
      <h3>{plan.name}</h3>
      <Select data={[]} />
      {plan.validityDays} {plan.validityDaysCycle} ${plan.price}
      <span>
        {plan.dataVolume} {plan.dataUnit}
      </span>
    </div>
  );
};
