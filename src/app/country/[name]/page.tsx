"use client";
import { useParams } from "next/navigation";

export default function CountryPage() {
  const { name } = useParams();
  return <div>{name}</div>;
}
