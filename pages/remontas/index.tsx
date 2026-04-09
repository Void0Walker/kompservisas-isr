import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { prefetchRepairs } from "@/api/graphql-hooks";
import Remontas from "@/src/pages/Remontas/Remontas";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchRepairs(qc);
  } catch (e) {
    console.error(e, "/remontas prefetch");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      ...(await serverSideTranslations(localeUsed!, ["remontas", "common"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function RemontasPage() {
  return <Remontas />;
}
