"use client";

import Link from "next/link";
import Image from "next/image";

interface Props {
  country: string;
}
export default function CountryCard({ country }: Props) {
  return (
    <Link
      href={`/country/${country}`}
      className="flex flex-col sm:flex-row sm:w-1/2 w-full shadow-md rounded-md sm:p-4 p-2 bg-white justify-between items-center cursor-pointer"
    >
      <Image
        src={`/images/${country}.png`}
        alt={country}
        width={100}
        height={100}
        className="sm:self-start self-center"
      />
      <div className="text-2xl font-semi-bold flex-1 text-center">
        {country}
      </div>
    </Link>
  );
}
