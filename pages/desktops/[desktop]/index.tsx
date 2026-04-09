import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Enum_Product_Type } from "@/api/generated/graphql";
import { prefetchTowerBySlug, useGetTowerBySlugQuery } from "@/api/graphql-hooks";
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
  const slug = String(params?.desktop ?? "");
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchTowerBySlug(qc, slug);
  } catch (e) {
    console.error(e, "/desktops/[desktop] prefetch");
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

function DesktopProductPage({ slug }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { locale } = useRouter();
  const { t } = useTranslation(["common", "product", "meta", "nesiojami"]);

  const tower = useGetTowerBySlugQuery({ variables: { slug } });
  const towerData = tower.data?.products?.data.map((entry) =>
    entry.attributes
      ? {
          ...entry.attributes,
          id: entry.id,
          link: generatePathFromTypeAndSlug(t("header_link_stacionarus_path") ?? Pages.Stacionarus.fallBackPath)(
            Enum_Product_Type.Tower,
            entry?.attributes?.slug ?? ""
          ),
        }
      : undefined
  )?.[0];

  const breadcrumbs = [
    {
      linkName: t("header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("header_link_stacionarus") ?? Pages.Stacionarus.name,
      linkPath: t("header_link_stacionarus_path") ?? Pages.Stacionarus.fallBackPath,
    },
    {
      linkName: towerData?.Product_Name ?? "",
      linkPath:
        locale === Locales.LT
          ? ValidPathsDynamicEN["/desktops/[desktop]"]
          : ValidPathsDynamicLT["/stacionarus/[stacionarus]"],
    },
  ];

  return (
    <ProductPage
      breadcrumbs={breadcrumbs}
      product={towerData}
      title={towerData?.Product_Name ?? "Stacionarūs"}
      type={Enum_Product_Type.Tower}
    />
  );
}

export default DesktopProductPage;
