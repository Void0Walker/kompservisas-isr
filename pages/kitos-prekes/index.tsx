import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { isArray } from "lodash-es";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { prefetchOtherProducts, useOtherProductsQuery } from "@/api/graphql-hooks";
import KitosPrekes from "@/src/pages/KitosPrekes/KitosPrekes";
import type {
  ManufacturerData,
  ManufacturerFilter,
  OtherProductFilter,
  OtherProductsData,
  OtherProductTypeData,
  SortOrder,
} from "@/src/helpers/types";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchOtherProducts(qc);
  } catch (e) {
    console.error(e, "/kitos-prekes prefetch");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      ...(await serverSideTranslations(localeUsed!, ["common", "product", "meta"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function KitosPrekesPage() {
  const router = useRouter();
  const query = router.isReady ? router.query : {};
  const otherProducts = useOtherProductsQuery();

  const otherProductData: OtherProductsData | undefined = otherProducts.data?.products?.data.map((entry) =>
    entry.attributes ? { ...entry.attributes, id: entry.id } : undefined
  );

  const manufacturerData: ManufacturerData | undefined = otherProductData
    ? otherProductData?.map((entry) => entry?.manufacturer?.data?.attributes?.Name)
    : undefined;

  const otherProductTypeData: OtherProductTypeData | undefined = otherProductData
    ? otherProductData?.map((entry) => entry?.other_product_type?.data?.attributes?.Type)
    : undefined;

  let sortOrder: SortOrder | undefined;
  let manufacturerFilters: ManufacturerFilter | undefined;
  let otherProductFilters: OtherProductFilter | undefined;

  if ("rusiavimas" in query && !isArray(query["rusiavimas"])) {
    sortOrder = { rusiavimas: query["rusiavimas"]! };
  }
  if ("gamintojas" in query) {
    manufacturerFilters = { gamintojas: query["gamintojas"]! };
  }
  if ("prekes_tipas" in query) {
    otherProductFilters = { prekes_tipas: query["prekes_tipas"]! };
  }

  return (
    <KitosPrekes
      manufacturerData={manufacturerData}
      manufacturerFilters={manufacturerFilters}
      otherProductFilters={otherProductFilters}
      otherProductTypeData={otherProductTypeData}
      otherProductsData={otherProductData}
      sortOrder={sortOrder}
    />
  );
}
