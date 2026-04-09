import { afterEach, describe, expect, it, vi } from "vitest";

import { getGraphqlEndpoint } from "@/utils/graph";

describe("getGraphqlEndpoint", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns public env when set", () => {
    vi.stubEnv("NEXT_PUBLIC_STRAPI_GRAPHQL_URL", "https://example.com/graphql");
    expect(getGraphqlEndpoint()).toBe("https://example.com/graphql");
  });

  it("falls back to kompservisas Strapi when unset", () => {
    vi.stubEnv("NEXT_PUBLIC_STRAPI_GRAPHQL_URL", "");
    expect(getGraphqlEndpoint()).toBe("https://strapi.kompservisas.lt/graphql");
  });
});
