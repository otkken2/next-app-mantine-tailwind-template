import { Loader } from "@mantine/core";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader color="blue" size="lg" />
    </div>
  );
}
