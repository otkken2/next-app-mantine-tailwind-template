import Link from "next/link";
import React from "react";

export const BackToHome = () => {
  return (
    <Link
      href="/"
      className="text-center text-xl text-blue-500 hover:underline underline-offset-3"
    >
      Back to Home
    </Link>
  );
};
