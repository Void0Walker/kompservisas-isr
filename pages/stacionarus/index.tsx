/* eslint-disable no-unused-vars */
import { dehydrate, QueryClient } from "@tanstack/react-query";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { prefetchTowersListing } from "@/api/graphql-hooks";
import { useGetFilteredTowersQuery, useTowersMinimizedQuery } from "@/api/graphql-hooks";
import Stacionarus from "@/src/pages/Stacionarus/Stacionarus";
import { getPageFilters } from "@/src/helpers/utils";
import theme from "@/src/theme";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";
import type { PossiblyCPUData, PossiblyManufacturerData, PossiblyTowerData } from "@/src/helpers/types";

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchTowersListing(qc, 100);
  } catch (e) {
    console.error(e, "/stacionarus prefetch");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      ...(await serverSideTranslations(localeUsed!, ["pagrindinis", "common", "meta", "nesiojami"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function StacionarusPage() {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const query = router.isReady ? router.query : {};
  const { cpuFilters, manufacturerFilters, sortOrder, page } = getPageFilters(query);

  const towers = useTowersMinimizedQuery();
  const filteredTowers = useGetFilteredTowersQuery({
    variables: {
      cpu: cpuFilters?.procesorius,
      manufacturer: manufacturerFilters?.gamintojas,
      page,
      pageSize: 100,
    },
  });

  const filteredTowerData: PossiblyTowerData = filteredTowers.data?.products?.data.map((entry) =>
    entry.attributes ? { ...entry.attributes, id: entry.id } : undefined
  );

  const manufacturerData: PossiblyManufacturerData = towers.data?.products?.data.map(
    ({ attributes }) => attributes?.manufacturer?.data?.attributes?.Name
  );

  const cpuData: PossiblyCPUData = towers.data?.products?.data.map(
    ({ attributes }) => attributes?.CPU?.data?.attributes?.Name
  );

  const pageCount = filteredTowers.data?.products?.meta.pagination?.pageCount;

  return (
    <Stacionarus
      cpuData={cpuData}
      cpuFilters={cpuFilters}
      filteredTowerData={filteredTowerData}
      isMobile={isMobile}
      manufacturerData={manufacturerData}
      page={page}
      pageCount={pageCount}
      sortOrder={sortOrder}
    />
  );
}
