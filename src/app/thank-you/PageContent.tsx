"use client";

import { PageTitle } from "@/components/PageTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProtectRoute } from "@/hooks/useProtectRoute";

export const PageContent = () => {
  const router = useRouter();
  useProtectRoute(router);

  return (
    <div className="flex flex-col gap-6">
      <PageTitle>Thank You</PageTitle>
      <p className="text-center text-lg">
        Thank you! Your eSIM purchase has been simulated successfully.
      </p>
      <p className="text-center text-lg text-blue-500">
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
};
