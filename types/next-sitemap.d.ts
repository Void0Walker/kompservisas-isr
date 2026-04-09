declare module "next-sitemap" {
  import type { GetServerSidePropsContext } from "next";

  export interface ISitemapField {
    changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    lastmod?: string;
    loc: string;
    priority?: number;
  }

  export function getServerSideSitemapLegacy(
    ctx: GetServerSidePropsContext,
    fields: ISitemapField[]
  ): Promise<{ props: Record<string, never> }>;
}
