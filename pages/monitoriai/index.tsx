import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { isArray } from "lodash-es";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { prefetchMonitors, useMonitorsQuery } from "@/api/graphql-hooks";
import Monitoriai from "@/src/pages/Moitoriai/Monitoriai";
import type {
  DisplaySizeData,
  DisplaySizeFilter,
  ManufacturerData,
  ManufacturerFilter,
  MonitorData,
  SortOrder,
} from "@/src/helpers/types";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchMonitors(qc);
  } catch (e) {
    console.error(e, "/monitoriai prefetch");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      ...(await serverSideTranslations(localeUsed!, ["common", "meta", "nesiojami"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function MonitoriaiPage() {
  const router = useRouter();
  const query = router.isReady ? router.query : {};
  const monitors = useMonitorsQuery();

  const monitorData: MonitorData | undefined = monitors.data?.products?.data.map((entry) =>
    entry.attributes ? { ...entry.attributes, id: entry.id } : undefined
  );

  const manufacturerData: ManufacturerData | undefined = monitorData
    ? monitorData?.map((entry) => entry?.manufacturer?.data?.attributes?.Name)
    : undefined;

  const displaySizeData: DisplaySizeData | undefined = monitors.data?.products?.data.map(
    (entry) => entry.attributes?.display_size?.data?.attributes?.Size
  );

  let sortOrder: SortOrder | undefined;
  let manufacturerFilters: ManufacturerFilter | undefined;
  let displaySizeFilters: DisplaySizeFilter | undefined;

  if ("rusiavimas" in query && !isArray(query["rusiavimas"])) {
    sortOrder = { rusiavimas: query["rusiavimas"]! };
  }
  if ("gamintojas" in query) {
    manufacturerFilters = { gamintojas: query["gamintojas"]! };
  }
  if ("ekrano_dydis" in query) {
    displaySizeFilters = { ekrano_dydis: query["ekrano_dydis"]! };
  }

  return (
    <Monitoriai
      displaySizeData={displaySizeData}
      displaySizeFilters={displaySizeFilters}
      manufacturerData={manufacturerData}
      manufacturerFilters={manufacturerFilters}
      monitorData={monitorData}
      sortOrder={sortOrder}
    />
  );
}
