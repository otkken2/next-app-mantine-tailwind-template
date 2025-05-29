"use client";

import { useState } from "react";
import { PACKAGE_TYPE, type PackageType, type Plan } from "@/types";
import { Button } from "@mantine/core";
import { PlanCard } from "@/components/PlanCard";
import { useRouter } from "next/navigation";
import { useProtectRoute } from "@/hooks/useProtectRoute";
import { PageTitle } from "@/components/PageTitle";

interface Props {
  fixedDayPlans: Plan[];
  perDayPlans: Plan[];
  name: string;
}

export const PageContent = ({ fixedDayPlans, perDayPlans, name }: Props) => {
  const router = useRouter();
  useProtectRoute(router);

  const [displayedPlanType, setDisplayedPlanType] = useState<PackageType>(
    PACKAGE_TYPE.FIXED_DAY,
  );
  const isFixedDay = displayedPlanType === PACKAGE_TYPE.FIXED_DAY;
  const isPerDay = displayedPlanType === PACKAGE_TYPE.PER_DAY;

  return (
    <main className="flex flex-col h-full items-center gap-6">
      <PageTitle>{name} eSIM</PageTitle>
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
              return <PlanCard key={plan.id} plan={plan} isPerDay />;
            })}
        </div>
      </div>
    </main>
  );
};
