import { Metadata } from "next";
import { PageContent } from "./PageContent";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants";

export const metadata: Metadata = {
  title: `Thank You | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
};

export default function ThankYouPage() {
  return <PageContent />;
}
