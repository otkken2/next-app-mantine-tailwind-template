import { PageTitle } from "@/components/PageTitle";
import CountryCard from "@/components/CountryCard";
import { AuthRequireMessage } from "@/components/AuthRequireMessage";
import { Metadata } from "next/types";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants";

const countries = ["Japan", "Korea", "China", "Taiwan", "America"];

export const metadata: Metadata = {
  title: `TOP | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-6">
      <PageTitle>Which country's eSIM would you choose?</PageTitle>
      <AuthRequireMessage />
      <div className="flex flex-col gap-4 justify-center items-center">
        {countries.map((country) => (
          <CountryCard key={country} country={country} />
        ))}
      </div>
    </main>
  );
}
