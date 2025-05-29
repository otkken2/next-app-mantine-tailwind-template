import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen w-full gap-6 items-center">
      <h2 className="text-center text-5xl">Not Found</h2>
      <a
        href="/"
        className="text-center text-xl text-blue-500 hover:underline underline-offset-3"
      >
        Back to Home
      </a>
    </div>
  );
}
