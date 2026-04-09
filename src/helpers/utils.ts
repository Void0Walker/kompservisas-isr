import { NextIncomingMessage } from "next/dist/server/request-meta";
import {
  Filters,
  PossiblyCPUFilter,
  PossiblyDisplaySizeFilter,
  PossiblyManufacturerFilter,
  PossiblySSDFilter,
  PossiblySortOrder,
} from "@/src/helpers/types";
import { isArray } from "lodash-es";
import { Dictionary } from "@/src/helpers/utilityTypes";

export const lowerCaseArray = (array: Array<string>) => array.map((it) => it.toLowerCase());

export const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const getUserAgent = (req?: NextIncomingMessage) => req?.headers["user-agent"];

export const isMobileDevice = (req?: NextIncomingMessage) =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(getUserAgent(req) ?? "");

export const createCloudinaryImageUrl = (url: string, transform: string) =>
  url.replace("upload/", `upload/${transform}/`);

export const reduceCloudinaryImageSize = (url: string) => createCloudinaryImageUrl(url, "f_auto,q_auto,w_600");

export const createCloudinarySrcSet = (url: string, widths: number[]) =>
  widths.map((width) => `${createCloudinaryImageUrl(url, `f_auto,q_auto,w_${width}`)} ${width}w`).join(", ");

export const getPageFilters = (query: Dictionary<string | string[] | undefined>) => {
  const sortOrder: PossiblySortOrder =
    "rusiavimas" in query && !isArray(query["rusiavimas"]) ? { rusiavimas: query["rusiavimas"]! } : undefined;
  const manufacturerFilters: PossiblyManufacturerFilter =
    Filters.GAMINTOJAS in query ? { gamintojas: query[Filters.GAMINTOJAS]! } : undefined;
  const cpuFilters: PossiblyCPUFilter =
    Filters.PROCESORIUS in query ? { procesorius: query[Filters.PROCESORIUS]! } : undefined;
  const displayFilters: PossiblyDisplaySizeFilter =
    Filters.EKRANO_DYDIS in query ? { ekrano_dydis: query[Filters.EKRANO_DYDIS]! } : undefined;
  const ssdFilters: PossiblySSDFilter =
    Filters.SSD_TALPA in query ? { ssd_talpa: query[Filters.SSD_TALPA]! } : undefined;
  const page = Filters.PAGE in query ? Number(query[Filters.PAGE]) : 1;
  return { cpuFilters, displayFilters, manufacturerFilters, page, sortOrder, ssdFilters };
};
