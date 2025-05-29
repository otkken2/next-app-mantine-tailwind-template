import axios, { AxiosError, AxiosResponse } from "axios";
import { PageContent } from "./PageContent";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants";
import { type Metadata } from "next";
import { PackageType, Plan } from "@/types";
import { notFound } from "next/navigation";

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

  let response: AxiosResponse<CountryApiResponse>;

  try {
    response = await axios.get<CountryApiResponse>(
      `https://esim.gmobile.biz/api/v1/plans?country=${name}`,
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch plans, AxiosError: ${error.status}`);
    }

    throw new Error("Failed to fetch plans");
  }

  if (
    !response.data.data.country ||
    response.data.data.plans.FIXED_DAY.length === 0 ||
    response.data.data.plans.PER_DAY.length === 0
  ) {
    notFound();
  }

  const perDayPlans = response.data.data.plans.PER_DAY;
  const fixedDayPlans = response.data.data.plans.FIXED_DAY;

  return (
    <PageContent
      fixedDayPlans={fixedDayPlans}
      perDayPlans={perDayPlans}
      name={name}
    />
  );
}
