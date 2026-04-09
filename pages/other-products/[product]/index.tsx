import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Enum_Product_Type } from "@/api/generated/graphql";
import { prefetchOtherProductBySlug, useGetOtherProductsBySlugQuery } from "@/api/graphql-hooks";
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
  const slug = String(params?.product ?? "");
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchOtherProductBySlug(qc, slug);
  } catch (e) {
    console.error(e, "/other-products/[product] prefetch");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      slug,
      ...(await serverSideTranslations(localeUsed!, ["common", "product", "nesiojami"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function OtherProductPage({ slug }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(["common", "product", "nesiojami"]);
  const { locale } = useRouter();

  const kitaPreke = useGetOtherProductsBySlugQuery({ variables: { slug } });
  const kitaPrekeData = kitaPreke.data?.products?.data.map((entry) =>
    entry.attributes
      ? {
          ...entry.attributes,
          id: entry.id,
          link: generatePathFromTypeAndSlug(
            t("common:header_link_kitos_prekes_path") ?? Pages.KitosPrekes.fallBackPath
          )(Enum_Product_Type.Other, entry?.attributes?.slug ?? ""),
        }
      : undefined
  )?.[0];

  const breadcrumbs = [
    {
      linkName: t("common:header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("common:header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("common:header_link_kitos_prekes") ?? Pages.KitosPrekes.name,
      linkPath: t("common:header_link_kitos_prekes_path") ?? Pages.KitosPrekes.fallBackPath,
    },
    {
      linkName: kitaPrekeData?.Product_Name ?? "",
      linkPath:
        locale === Locales.LT
          ? ValidPathsDynamicEN["/other-products/[product]"]
          : ValidPathsDynamicLT["/kitos-prekes/[preke]"],
    },
  ];

  return (
    <ProductPage
      breadcrumbs={breadcrumbs}
      product={kitaPrekeData}
      title={kitaPrekeData?.Product_Name ?? ""}
      type={Enum_Product_Type.Other}
    />
  );
}
