import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { head } from "lodash-es";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Enum_Product_Type } from "@/api/generated/graphql";
import { prefetchLaptopBySlug, useGetLaptopBySlugQuery } from "@/api/graphql-hooks";
import ProductPage from "@/src/components/ProductPage";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";
import { ValidPathsDynamicEN, ValidPathsDynamicLT } from "@/src/helpers/constants";
import type { DynamicProductPageProps } from "@/src/helpers/types";
import { generatePathFromTypeAndSlug } from "@/src/helpers/pathUtils";
import { Pages } from "@/src/metaData";
import { Locales } from "@/utils/locales";
import { useTranslation } from "next-i18next";

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: "blocking",
  paths: [],
});

export const getStaticProps: GetStaticProps<DynamicProductPageProps> = async ({ params, locale, defaultLocale }) => {
  const slug = String(params?.nesiojamas ?? "");
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchLaptopBySlug(qc, slug);
  } catch (e) {
    console.error(e, "/nesiojami/[nesiojamas] prefetch");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      slug,
      ...(await serverSideTranslations(localeUsed!, ["product", "common", "meta"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function NesiojamasPage({ slug }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation(["common", "pagrindinis"]);
  const { locale } = useRouter();

  const laptop = useGetLaptopBySlugQuery({ variables: { slug } });
  const laptopData = head(
    laptop.data?.products?.data.map((entry) =>
      entry.attributes
        ? {
            ...entry.attributes,
            id: entry.id,
            link: generatePathFromTypeAndSlug(t("header_link_nesiojami_path") ?? Pages.Nesiojami.fallBackPath)(
              Enum_Product_Type.Laptop,
              entry?.attributes?.slug ?? ""
            ),
          }
        : undefined
    )
  );

  const breadcrumbs = [
    {
      linkName: t("header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("header_link_nesiojami") ?? Pages.Nesiojami.name,
      linkPath: t("header_link_nesiojami_path") ?? Pages.Nesiojami.fallBackPath,
    },
    {
      linkName: laptopData?.Product_Name ?? "",
      linkPath:
        locale === Locales.LT
          ? ValidPathsDynamicEN["/laptops/[laptop]"]
          : ValidPathsDynamicLT["/nesiojami/[nesiojamas]"],
    },
  ];

  return (
    <ProductPage
      breadcrumbs={breadcrumbs}
      product={laptopData}
      title={laptopData?.Product_Name ?? "Nešiojami"}
      type={Enum_Product_Type.Laptop}
    />
  );
}
