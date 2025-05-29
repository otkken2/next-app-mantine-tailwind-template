export const PACKAGE_TYPE = {
  PER_DAY: "PER_DAY",
  FIXED_DAY: "FIXED_DAY",
} as const;
export type PackageType = (typeof PACKAGE_TYPE)[keyof typeof PACKAGE_TYPE];

export interface Plan {
  id: number;
  name: string;
  planId: string;
  price: number;
  dataId: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  validityDays: number;
  dataVolume: string;
  dataUnit: string;
  validityDaysCycle: string;
  metadata: object;
  networkId: number;
  enabled: boolean;
  packageType: PackageType;
  countryId: number;
  serviceProviderId: number;
  prices: object;
  defaultCurrency: string;
  topupEnabled: boolean;
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
  };
  country: {
    name: string;
    enabled: boolean;
    subCountries: string[] | null;
    code: string;
  };
  serviceProvider: {
    name: string;
    enabled: boolean;
  };
  plans_prices: null;
  provision_price: null;
  xe: {
    JPY: number;
    USD: number;
    KRW: number;
    GBP: number;
    EUR: number;
    CNY: number;
    TWD: number;
    HKD: number;
    CAD: number;
    AUD: number;
  };
}

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
