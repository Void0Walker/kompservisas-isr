const FALLBACK_GRAPHQL_URL = "https://strapi.kompservisas.lt/graphql";

/**
 * Public GraphQL endpoint (browser + server). Set `NEXT_PUBLIC_STRAPI_GRAPHQL_URL` in production if needed.
 */
export function getGraphqlEndpoint(): string {
  return process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL?.trim() || FALLBACK_GRAPHQL_URL;
}
