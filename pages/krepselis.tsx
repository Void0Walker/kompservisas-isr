import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Krepselis from "@/src/pages/Krepselis/Krepselis";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;
  return {
    props: {
      ...(await serverSideTranslations(localeUsed!, ["common", "meta", "product"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function KrepselisPage() {
  return <Krepselis />;
}
