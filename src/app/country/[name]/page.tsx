import axios from "axios";
import { PageContent } from "./PageContent";
import { PageTitle } from "@/components/PageTitle";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants";
import { type Metadata } from "next";
import { PackageType, Plan } from "@/types";

export const metadata: Metadata = {
  title: `Country | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
};

interface CountryApiResponse {
  statusCode: number;
  data: {
    network: {
      id: number;
      name: string;
      enabled: boolean;
      code: string;
      apn: string;
      qos: string;
      type: string;
      networkGeneration: string;
      countryId: number;
      createdAt: string;
      updatedAt: string;
    }[];
    country: {
      name: string;
      enabled: boolean;
      subCountries: string[] | null;
      code: string;
    };
    plans: {
      [key in PackageType]: Plan[];
    };
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const {
    data: {
      data: { plans },
    },
  } = await axios.get<CountryApiResponse>(
    `https://esim.gmobile.biz/api/v1/plans?country=${name}`,
  );
  const perDayPlans = plans.PER_DAY;
  const fixedDayPlans = plans.FIXED_DAY;
  return (
    <main className="flex flex-col h-full items-center gap-6">
      <PageTitle>{name} eSIM</PageTitle>
      <PageContent fixedDayPlans={fixedDayPlans} perDayPlans={perDayPlans} />
    </main>
  );
}
