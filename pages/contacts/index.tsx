import type { GetStaticProps } from "next";
import Kontaktai from "@/src/pages/Kontaktai/Kontaktai";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(localeUsed!, ["kontaktai", "common", "meta"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

const KontaktaiPage = () => <Kontaktai />;

export default KontaktaiPage;
