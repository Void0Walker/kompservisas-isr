import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Enum_Product_Type } from "@/api/generated/graphql";
import { prefetchMonitorBySlug, useGetMonitorsBySlugQuery } from "@/api/graphql-hooks";
import ProductPage from "@/src/components/ProductPage";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";
import { ValidPathsDynamicEN, ValidPathsDynamicLT } from "@/src/helpers/constants";
import type { DynamicProductPageProps } from "@/src/helpers/types";
import { generatePathFromTypeAndSlug } from "@/src/helpers/pathUtils";
import { Pages } from "@/src/metaData";
import { Locales } from "@/utils/locales";
import { useTranslation } from "react-i18next";

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: "blocking",
  paths: [],
});

export const getStaticProps: GetStaticProps<DynamicProductPageProps> = async ({ params, locale, defaultLocale }) => {
  const slug = String(params?.monitor ?? "");
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchMonitorBySlug(qc, slug);
  } catch (e) {
    console.error(e, "/monitors/[monitor] prefetch");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      slug,
      ...(await serverSideTranslations(localeUsed!, ["common", "meta", "nesiojami", "product"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function MonitorProductPage({ slug }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(["common", "meta", "nesiojami", "product"]);
  const { locale } = useRouter();

  const monitor = useGetMonitorsBySlugQuery({ variables: { slug } });
  const monitorData = monitor.data?.products?.data.map((entry) => ({
    ...entry.attributes,
    Image: entry.attributes?.Image!,
    Price: entry.attributes?.Price ?? 0,
    Product_Name: entry.attributes?.Product_Name ?? "monitorius",
    Quantity: entry.attributes?.Quantity ?? 0,
    link: generatePathFromTypeAndSlug(t("header_link_monitoriai_path") ?? Pages.Monitoriai.fallBackPath)(
      Enum_Product_Type.Monitor,
      entry?.attributes?.slug ?? ""
    ),
  }))?.[0];

  const breadcrumbs = [
    {
      linkName: t("header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("header_link_monitoriai") ?? Pages.Monitoriai.name,
      linkPath: t("header_link_monitoriai_path") ?? Pages.Monitoriai.fallBackPath,
    },
    {
      linkName: monitorData?.Product_Name ?? "",
      linkPath:
        locale === Locales.LT
          ? ValidPathsDynamicEN["/monitors/[monitor]"]
          : ValidPathsDynamicLT["/monitoriai/[monitorius]"],
    },
  ];

  return (
    <ProductPage
      breadcrumbs={breadcrumbs}
      product={monitorData}
      title={monitorData?.Product_Name ?? "Monitoriai"}
      type={Enum_Product_Type.Monitor}
    />
  );
}
