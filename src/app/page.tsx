"use client";

import { Button } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Button onClick={() => alert("Hello")}>Click me</Button>
    </div>
  );
}
