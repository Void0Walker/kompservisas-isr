import Supirkimas from "@/src/pages/Supirkimas/Supirkimas";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { Locales } from "@/utils/locales";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = (locale ?? defaultLocale) as Locales.LT;

  return {
    props: {
      ...(await serverSideTranslations(localeUsed!, ["supirkimas", "common", "meta"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

const SupirkimasPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => <Supirkimas />;

export default SupirkimasPage;
