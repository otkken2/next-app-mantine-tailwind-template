import { PageTitle } from "@/components/PageTitle";
import Image from "next/image";
import Link from "next/link";
const countries = ["Japan", "Korea", "China", "Taiwan", "America"];

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-6">
      <PageTitle>Select Country for your eSIM</PageTitle>
      <div className="flex flex-col gap-4 justify-center items-center">
        {countries.map((country) => (
          <Link
            href={`/country/${country}`}
            key={country}
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
        ))}
      </div>
    </main>
  );
}
