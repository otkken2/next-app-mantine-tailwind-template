import { SITE_NAME, SITE_DESCRIPTION } from "@/constants";
import { type Metadata } from "next";
import { PageContent } from "./PageContent";

export const metadata: Metadata = {
  title: `Checkout | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
};

export default function CheckoutPage() {
  return <PageContent />;
}
