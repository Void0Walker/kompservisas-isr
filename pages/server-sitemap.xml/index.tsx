import { getServerSideSitemapLegacy, type ISitemapField } from "next-sitemap";
import type { GetServerSideProps } from "next";
import { ProductEntity } from "@/api/generated/graphql";
import { generatePathFromTypeAndSlug } from "@/src/helpers/pathUtils";
import { isEmpty } from "lodash-es";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const products = await fetch(`${process.env.STRAPI_URL}/products?_limit=-1`);
    const parsedProducts: { data: Array<ProductEntity> } = await products.json();
    const siteUrl = process.env.SITE_URL;

    if (parsedProducts) {
      const fields: Array<ISitemapField> = parsedProducts.data
        .map(({ attributes }) => ({
          lastmod: new Date().toISOString(),
          loc: `${siteUrl}${
            (attributes?.Type && attributes?.slug && generatePathFromTypeAndSlug()(attributes.Type, attributes.slug)) ??
            ""
          }`,
        }))
        .filter(({ loc }) => loc !== "" && loc !== siteUrl);

      return !isEmpty(fields) ? getServerSideSitemapLegacy(ctx, fields) : { props: {} };
    }
  } catch (error) {
    console.log({ error });
  }

  return { props: {} };
};

export default function Sitemap() {}
