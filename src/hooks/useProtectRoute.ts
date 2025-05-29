import { useUser } from "@/contexts/UserContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect } from "react";

export const useProtectRoute = (router: AppRouterInstance) => {
  const { user } = useUser();

  useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [user, router]);
};
