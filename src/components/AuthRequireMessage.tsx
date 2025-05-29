"use client";

import { useUser } from "@/contexts/UserContext";

export const AuthRequireMessage = () => {
  const { user } = useUser();
  if (user === null) {
    return <p className="text-center">Signin required to continue</p>;
  }
  return null;
};
