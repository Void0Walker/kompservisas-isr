import router from "next/router";
import { Enum_Product_Type } from "@/api/generated/graphql";
import { Pages } from "@/src/metaData";

export const generateQueryStringFromList = (key: string, values: Array<string>): string => {
  const query = new URLSearchParams();
  values.forEach((value) => query.append(key, encodeURI(value)));
  return decodeURIComponent(query.toString());
};

export const generatePathFromTypeAndSlug = (path?: string) => (type: Enum_Product_Type, slug?: string) => {
  switch (type) {
    case Enum_Product_Type.Laptop:
      return `${path ?? Pages.Nesiojami.fallBackPath}/${slug}`;
    case Enum_Product_Type.Monitor:
      return `${path ?? Pages.Monitoriai.fallBackPath}/${slug}`;
    case Enum_Product_Type.Tower:
      return `${path ?? Pages.Stacionarus.fallBackPath}/${slug}`;
    case Enum_Product_Type.Other:
      return `${path ?? Pages.KitosPrekes.fallBackPath}/${slug}`;
    default:
      return "/";
  }
};

export const generatePathFromSlug = (base: string, slug: string) => `${base}/${slug}`;

export const handleChangePath = (base: string, slug: string) => router.push(generatePathFromSlug(base, slug));

export const handleAppendParam = (parameter: string, value: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set(parameter, value.toString());
  router.push(url.toString());
};
