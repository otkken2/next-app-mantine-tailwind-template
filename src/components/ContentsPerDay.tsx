import { Plan } from "@/types";
import React from "react";

interface Props {
  plan: Plan;
}

export const ContentsPerDay = ({ plan }: Props) => {
  return (
    <div>
      <p>
        <span className="font-bold">Plan Name</span>: {plan.name}
      </p>
      <p>
        <span className="font-bold">Price</span>: ${plan.price}
      </p>
      <p>
        <span className="font-bold">Data Volume</span>: {plan.dataVolume}{" "}
        {plan.dataUnit}
      </p>
      <p>
        <span className="font-bold">Duration</span>: {plan.validityDays}{" "}
        {plan.validityDaysCycle}
      </p>
    </div>
  );
};
