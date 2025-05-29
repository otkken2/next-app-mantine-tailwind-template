import { SITE_NAME, SITE_DESCRIPTION } from "@/constants";
import { type Metadata } from "next";
import { PageContent } from "./PageContent";

export const metadata: Metadata = {
  title: `Cart | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
};

export default function CartPage() {
  return <PageContent />;
}
