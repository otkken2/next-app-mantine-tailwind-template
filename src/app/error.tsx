"use client";

import { Button } from "@mantine/core";
import { BackToHome } from "@/components/BackToHome";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h2 className="text-2xl">Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
      <BackToHome />
    </div>
  );
}
