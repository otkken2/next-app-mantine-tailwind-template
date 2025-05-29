"use client";

import { TotalPrice } from "./TotalPrice";

interface Props {
  children: React.ReactNode;
}

export const PurchaseSummaryLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">{children}</div>
      <TotalPrice />
    </div>
  );
};
