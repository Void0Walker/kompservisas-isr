import ApieMus from "@/src/pages/ApieMus/ApieMus";

import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(localeUsed!, ["apie-mus", "common"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

const ApieMusPage = () => <ApieMus />;

export default ApieMusPage;
