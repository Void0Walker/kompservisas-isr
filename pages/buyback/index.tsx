import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Supirkimas from "@/src/pages/Supirkimas/Supirkimas";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(localeUsed!, ["supirkimas", "common", "meta"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

const BuyBackPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => <Supirkimas />;

export default BuyBackPage;
