import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { prefetchRecommendedProducts } from "@/api/graphql-hooks";
import Pagrindinis from "@/src/pages/Pagrindinis/Pagrindinis";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchRecommendedProducts(qc);
  } catch (e) {
    console.error(e, "/ index prefetch recommended products");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      ...(await serverSideTranslations(localeUsed!, ["pagrindinis", "common", "meta"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function LandingPage() {
  return <Pagrindinis />;
}
