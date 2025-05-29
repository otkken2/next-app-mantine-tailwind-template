import { Plan } from "@/types";
import React from "react";

interface Props {
  plan: Plan;
}

export const ContentsFixedDay = ({ plan }: Props) => {
  return (
    <div>
      <p>
        <span className="font-bold">Plan Name (Duration)</span>: {plan.name}
      </p>
      <p>
        <span className="font-bold">Price</span>: ${plan.price}
      </p>
      <p>
        <span className="font-bold">Data Volume</span>: {plan.dataVolume}{" "}
        {plan.dataUnit}
      </p>
    </div>
  );
};
