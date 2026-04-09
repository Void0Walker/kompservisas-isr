import { useQuery, type QueryClient, type UseQueryOptions } from "@tanstack/react-query";
import type {
  GetEshopStateQuery,
  GetFilteredLaptopsQuery,
  GetFilteredLaptopsQueryVariables,
  GetFilteredTowersQuery,
  GetFilteredTowersQueryVariables,
  GetLaptopBySlugQuery,
  GetLaptopBySlugQueryVariables,
  GetMonitorsBySlugQuery,
  GetMonitorsBySlugQueryVariables,
  GetOrderbyUidQuery,
  GetOrderbyUidQueryVariables,
  GetOtherProductsBySlugQuery,
  GetOtherProductsBySlugQueryVariables,
  GetRecommendedProductsQuery,
  GetRepairsListQuery,
  GetTowerBySlugQuery,
  GetTowerBySlugQueryVariables,
  LaptopsMinimizedQuery,
  MonitorsQuery,
  OtherProductsQuery,
  TowersMinimizedQuery,
} from "@/api/generated/graphql";
import {
  GetEshopStateDocument,
  GetFilteredLaptopsDocument,
  GetFilteredTowersDocument,
  GetLaptopBySlugDocument,
  GetMonitorsBySlugDocument,
  GetOrderbyUidDocument,
  GetOtherProductsBySlugDocument,
  GetRecommendedProductsDocument,
  GetRepairsListDocument,
  GetTowerBySlugDocument,
  LaptopsMinimizedDocument,
  MonitorsDocument,
  OtherProductsDocument,
  TowersMinimizedDocument,
} from "@/api/generated/graphql";
import { graphqlRequest } from "@/api/graphqlRequest";

/** Align with ISR `revalidate` (seconds); keeps hydrated data fresh without immediate refetch. */
export const GRAPHQL_STALE_TIME_MS = 60 * 1000;

/** Drop `undefined` so React Query state survives Next.js JSON serialization in `getStaticProps`. */
function compactGqlVars<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(Object.entries(obj).filter(([, val]) => val !== undefined)) as T;
}

export const graphqlKeys = {
  eshopState: () => ["GetEshopState"] as const,
  filteredLaptops: (v: GetFilteredLaptopsQueryVariables) =>
    ["GetFilteredLaptops", compactGqlVars({ ...v })] as const,
  filteredTowers: (v: GetFilteredTowersQueryVariables) =>
    ["GetFilteredTowers", compactGqlVars({ ...v })] as const,
  laptopBySlug: (slug: string) => ["GetLaptopBySlug", slug] as const,
  laptopsMinimized: () => ["LaptopsMinimized"] as const,
  monitorBySlug: (slug: string) => ["GetMonitorsBySlug", slug] as const,
  monitors: () => ["Monitors"] as const,
  orderByUid: (uid: string) => ["GetOrderbyUID", uid] as const,
  otherProductBySlug: (slug: string) => ["GetOtherProductsBySlug", slug] as const,
  otherProducts: () => ["OtherProducts"] as const,
  recommendedProducts: () => ["GetRecommendedProducts"] as const,
  repairsList: () => ["GetRepairsList"] as const,
  towerBySlug: (slug: string) => ["GetTowerBySlug", slug] as const,
  towersMinimized: () => ["TowersMinimized"] as const,
};

export async function prefetchRecommendedProducts(qc: QueryClient): Promise<void> {
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(GetRecommendedProductsDocument),
    queryKey: graphqlKeys.recommendedProducts(),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchTowersListing(qc: QueryClient, pageSize: number): Promise<void> {
  const vars = compactGqlVars({ page: 1, pageSize }) as GetFilteredTowersQueryVariables;
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(GetFilteredTowersDocument, vars),
    queryKey: graphqlKeys.filteredTowers(vars),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(TowersMinimizedDocument),
    queryKey: graphqlKeys.towersMinimized(),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchLaptopsListing(qc: QueryClient, pageSize: number): Promise<void> {
  const vars = compactGqlVars({ page: 1, pageSize }) as GetFilteredLaptopsQueryVariables;
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(GetFilteredLaptopsDocument, vars),
    queryKey: graphqlKeys.filteredLaptops(vars),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(LaptopsMinimizedDocument),
    queryKey: graphqlKeys.laptopsMinimized(),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchMonitors(qc: QueryClient): Promise<void> {
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(MonitorsDocument),
    queryKey: graphqlKeys.monitors(),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchOtherProducts(qc: QueryClient): Promise<void> {
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(OtherProductsDocument),
    queryKey: graphqlKeys.otherProducts(),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchRepairs(qc: QueryClient): Promise<void> {
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(GetRepairsListDocument),
    queryKey: graphqlKeys.repairsList(),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchTowerBySlug(qc: QueryClient, slug: string): Promise<void> {
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(GetTowerBySlugDocument, { slug }),
    queryKey: graphqlKeys.towerBySlug(slug),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchLaptopBySlug(qc: QueryClient, slug: string): Promise<void> {
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(GetLaptopBySlugDocument, { slug }),
    queryKey: graphqlKeys.laptopBySlug(slug),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchMonitorBySlug(qc: QueryClient, slug: string): Promise<void> {
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(GetMonitorsBySlugDocument, { slug }),
    queryKey: graphqlKeys.monitorBySlug(slug),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export async function prefetchOtherProductBySlug(qc: QueryClient, slug: string): Promise<void> {
  await qc.prefetchQuery({
    queryFn: () => graphqlRequest(GetOtherProductsBySlugDocument, { slug }),
    queryKey: graphqlKeys.otherProductBySlug(slug),
    staleTime: GRAPHQL_STALE_TIME_MS,
  });
}

export function useGetEshopStateQuery(
  options?: Omit<UseQueryOptions<GetEshopStateQuery>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryFn: () => graphqlRequest(GetEshopStateDocument),
    queryKey: graphqlKeys.eshopState(),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetRecommendedProductsQuery(
  options?: Omit<UseQueryOptions<GetRecommendedProductsQuery>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryFn: () => graphqlRequest(GetRecommendedProductsDocument),
    queryKey: graphqlKeys.recommendedProducts(),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetRepairsListQuery(
  options?: Omit<UseQueryOptions<GetRepairsListQuery>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryFn: () => graphqlRequest(GetRepairsListDocument),
    queryKey: graphqlKeys.repairsList(),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useTowersMinimizedQuery(
  options?: Omit<UseQueryOptions<TowersMinimizedQuery>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryFn: () => graphqlRequest(TowersMinimizedDocument),
    queryKey: graphqlKeys.towersMinimized(),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetFilteredTowersQuery(
  args: { variables: GetFilteredTowersQueryVariables },
  options?: Omit<UseQueryOptions<GetFilteredTowersQuery>, "queryKey" | "queryFn">
) {
  const { variables } = args;
  const vars = compactGqlVars({ ...variables }) as GetFilteredTowersQueryVariables;
  return useQuery({
    queryFn: () => graphqlRequest(GetFilteredTowersDocument, vars),
    queryKey: graphqlKeys.filteredTowers(vars),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useLaptopsMinimizedQuery(
  options?: Omit<UseQueryOptions<LaptopsMinimizedQuery>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryFn: () => graphqlRequest(LaptopsMinimizedDocument),
    queryKey: graphqlKeys.laptopsMinimized(),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetFilteredLaptopsQuery(
  args: { variables: GetFilteredLaptopsQueryVariables },
  options?: Omit<UseQueryOptions<GetFilteredLaptopsQuery>, "queryKey" | "queryFn">
) {
  const { variables } = args;
  const vars = compactGqlVars({ ...variables }) as GetFilteredLaptopsQueryVariables;
  return useQuery({
    queryFn: () => graphqlRequest(GetFilteredLaptopsDocument, vars),
    queryKey: graphqlKeys.filteredLaptops(vars),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useMonitorsQuery(options?: Omit<UseQueryOptions<MonitorsQuery>, "queryKey" | "queryFn">) {
  return useQuery({
    queryFn: () => graphqlRequest(MonitorsDocument),
    queryKey: graphqlKeys.monitors(),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useOtherProductsQuery(
  options?: Omit<UseQueryOptions<OtherProductsQuery>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryFn: () => graphqlRequest(OtherProductsDocument),
    queryKey: graphqlKeys.otherProducts(),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetTowerBySlugQuery(
  args: { variables: GetTowerBySlugQueryVariables },
  options?: Omit<UseQueryOptions<GetTowerBySlugQuery>, "queryKey" | "queryFn" | "enabled">
) {
  const slug = args.variables.slug;
  return useQuery({
    enabled: Boolean(slug),
    queryFn: () => graphqlRequest(GetTowerBySlugDocument, { slug }),
    queryKey: graphqlKeys.towerBySlug(slug),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetLaptopBySlugQuery(
  args: { variables: GetLaptopBySlugQueryVariables },
  options?: Omit<UseQueryOptions<GetLaptopBySlugQuery>, "queryKey" | "queryFn" | "enabled">
) {
  const slug = args.variables.slug;
  return useQuery({
    enabled: Boolean(slug),
    queryFn: () => graphqlRequest(GetLaptopBySlugDocument, { slug }),
    queryKey: graphqlKeys.laptopBySlug(slug),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetMonitorsBySlugQuery(
  args: { variables: GetMonitorsBySlugQueryVariables },
  options?: Omit<UseQueryOptions<GetMonitorsBySlugQuery>, "queryKey" | "queryFn" | "enabled">
) {
  const slug = args.variables.slug;
  return useQuery({
    enabled: Boolean(slug),
    queryFn: () => graphqlRequest(GetMonitorsBySlugDocument, { slug }),
    queryKey: graphqlKeys.monitorBySlug(slug),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetOtherProductsBySlugQuery(
  args: { variables: GetOtherProductsBySlugQueryVariables },
  options?: Omit<UseQueryOptions<GetOtherProductsBySlugQuery>, "queryKey" | "queryFn" | "enabled">
) {
  const slug = args.variables.slug;
  return useQuery({
    enabled: Boolean(slug),
    queryFn: () => graphqlRequest(GetOtherProductsBySlugDocument, { slug }),
    queryKey: graphqlKeys.otherProductBySlug(slug),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}

export function useGetOrderbyUidQuery(
  args: { variables: GetOrderbyUidQueryVariables },
  options?: Omit<UseQueryOptions<GetOrderbyUidQuery>, "queryKey" | "queryFn" | "enabled">
) {
  const UID = args.variables.UID;
  return useQuery({
    enabled: Boolean(UID),
    queryFn: () => graphqlRequest(GetOrderbyUidDocument, { UID }),
    queryKey: graphqlKeys.orderByUid(UID),
    staleTime: GRAPHQL_STALE_TIME_MS,
    ...options,
  });
}
