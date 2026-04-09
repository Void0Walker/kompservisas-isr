import { dehydrate, QueryClient } from "@tanstack/react-query";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { prefetchLaptopsListing, useGetFilteredLaptopsQuery, useLaptopsMinimizedQuery } from "@/api/graphql-hooks";
import {
  PossiblyCPUData,
  PossiblyDisplaySizeData,
  PossiblyLaptopData,
  PossiblyManufacturerData,
  PossiblySSDData,
} from "@/src/helpers/types";
import { getPageFilters } from "@/src/helpers/utils";
import Nesiojami from "@/src/pages/Nesiojami/Nesiojami";
import theme from "@/src/theme";
import { ISR_REVALIDATE_SECONDS } from "@/src/constants/isr";

const LISTING_PAGE_SIZE = 100;

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const localeUsed = locale ?? defaultLocale;
  const qc = new QueryClient();
  try {
    await prefetchLaptopsListing(qc, 100);
  } catch (e) {
    console.error(e, "/nesiojami prefetch");
  }

  return {
    props: {
      dehydratedState: dehydrate(qc),
      ...(await serverSideTranslations(localeUsed!, ["nesiojami", "common", "meta"])),
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};

export default function NesiojamiPage() {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const query = router.isReady ? router.query : {};
  const { cpuFilters, displayFilters, manufacturerFilters, sortOrder, ssdFilters, page } = getPageFilters(query);

  const { data: laptops } = useLaptopsMinimizedQuery();
  const { data: filteredLaptops } = useGetFilteredLaptopsQuery({
    variables: {
      cpu: cpuFilters?.procesorius,
      display_size: displayFilters?.ekrano_dydis,
      manufacturer: manufacturerFilters?.gamintojas,
      page,
      pageSize: LISTING_PAGE_SIZE,
      storage_ssd: ssdFilters?.ssd_talpa,
    },
  });

  const filteredLaptopData: PossiblyLaptopData = filteredLaptops?.products?.data.map(({ attributes, id }) =>
    attributes && id ? { ...attributes, id } : undefined
  );

  const manufacturerData: PossiblyManufacturerData = laptops?.products?.data.map(
    ({ attributes }) => attributes?.manufacturer?.data?.attributes?.Name
  );

  const cpuData: PossiblyCPUData = laptops?.products?.data.map(
    ({ attributes }) => attributes?.CPU?.data?.attributes?.Name
  );

  const displaySizeData: PossiblyDisplaySizeData = laptops?.products?.data.map(
    ({ attributes }) => attributes?.display_size?.data?.attributes?.Size
  );

  const ssdData: PossiblySSDData = laptops?.products?.data.map(
    ({ attributes }) => attributes?.storage_ssd?.data?.attributes?.Size
  );

  const pageCount = filteredLaptops?.products?.meta.pagination?.pageCount;

  return (
    <Nesiojami
      cpuData={cpuData}
      displaySizeData={displaySizeData}
      filteredLaptopData={filteredLaptopData}
      isMobile={isMobile}
      manufacturerData={manufacturerData}
      page={page}
      pageCount={pageCount}
      sortOrder={sortOrder}
      ssdData={ssdData}
    />
  );
}
