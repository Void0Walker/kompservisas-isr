/* eslint-disable no-unused-vars */
import { isEmpty, orderBy } from "lodash-es";
import { Enum_Product_Type } from "@/api/generated/graphql";
import { notFoundImage } from "@/src/metaData";
import {
  FilteredLaptopData,
  FilteredProductEntry,
  FilteredTowerData,
  MonitorData,
  OtherProductsData,
  ProductEntry,
} from "@/src/helpers/types";
import { ArrayElement } from "@/src/helpers/utilityTypes";

export const prepareFilteredLaptopData = (
  products: Array<FilteredProductEntry>,
  getProductLink: (type: Enum_Product_Type, slug?: string) => string
) => {
  return !isEmpty(products)
    ? orderBy(
        products.map((entry: ArrayElement<FilteredLaptopData>) => ({
          cpu: entry?.CPU?.data?.attributes?.Name ?? "",
          display_size: entry?.display_size?.data?.attributes?.Size ?? "",
          id: entry!.id,
          get link() {
            return getProductLink(Enum_Product_Type.Laptop, this.slug);
          },
          manufacturer: entry?.manufacturer?.data?.attributes?.Name ?? "",
          name: `${entry?.manufacturer?.data?.attributes?.Name} ${entry?.Product_Name}`,
          price: entry?.Price ?? 0,
          productCardImage: {
            alt: entry?.Image.data[0]?.attributes?.alternativeText ?? "laptop image",
            height: entry?.Image.data[0]?.attributes?.formats?.small?.height,
            url:
              entry?.Image.data[0]?.attributes?.formats?.small?.url ||
              entry?.Image.data[0]?.attributes?.url ||
              notFoundImage,
            width: entry?.Image.data[0]?.attributes?.formats?.small?.width,
          },
          productCardSubtitle: [
            entry?.CPU?.data?.attributes?.Name,
            entry?.storage_ssd?.data?.attributes?.Size || entry?.storage_hdd?.data?.attributes?.Size,
            entry?.display_size?.data?.attributes?.Size,
            entry?.ram?.data?.attributes?.RAM,
            entry?.grade ? `${entry?.grade} rūšis` : "",
          ].join(", "),
          productThumbnail: {
            alt: entry?.Image.data[0]?.attributes?.alternativeText ?? "laptop image",
            url: entry?.Image.data[0]?.attributes?.formats?.thumbnail?.url ?? notFoundImage,
          },
          quantity: entry?.Quantity ?? 0,
          slug: entry!.slug ?? "/",
          ssd: entry?.storage_ssd?.data?.attributes?.Size ?? "",
        })),
        "price"
      )
    : [];
};

export const prepareFilteredTowerData = (
  products: Array<FilteredProductEntry>,
  getProductLink: (type: Enum_Product_Type, slug?: string) => string
) => {
  return !isEmpty(products)
    ? orderBy(
        products.map((entry: ArrayElement<FilteredTowerData>) => ({
          cpu: entry?.CPU?.data?.attributes?.Name ?? "",
          id: entry!.id,
          get link() {
            return getProductLink(Enum_Product_Type.Tower, this.slug);
          },
          manufacturer: entry?.manufacturer?.data?.attributes?.Name ?? "",
          name: `${entry?.manufacturer?.data?.attributes?.Name} ${entry?.Product_Name}`,
          price: entry?.Price ?? 0,
          productCardImage: {
            alt: entry?.Image.data[0]?.attributes?.alternativeText ?? "laptop image",
            height: entry?.Image.data[0]?.attributes?.formats?.small?.height,
            url:
              entry?.Image.data[0]?.attributes?.formats?.small?.url ||
              entry?.Image.data[0]?.attributes?.url ||
              notFoundImage,
            width: entry?.Image.data[0]?.attributes?.formats?.small?.width,
          },
          productCardSubtitle: [
            entry!.CPU?.data?.attributes?.Name,
            entry?.storage_ssd?.data?.attributes?.Size || entry?.storage_hdd?.data?.attributes?.Size,
            entry!.grade ? `${entry!.grade} rūšis` : "",
          ].join(", "),
          productThumbnail: {
            alt: entry?.Image.data[0]?.attributes?.alternativeText ?? "tower image",
            url: entry?.Image.data[0]?.attributes?.formats?.thumbnail?.url ?? notFoundImage,
          },
          quantity: entry?.Quantity ?? 0,
          slug: entry?.slug ?? "/",
        })),
        "price"
      )
    : [];
};

const prepareProductData = (
  products: Array<ProductEntry>,
  type: Partial<Enum_Product_Type>,
  getProductLink: (type: Enum_Product_Type, slug?: string) => string
) => {
  switch (type) {
    case Enum_Product_Type.Monitor:
      return !isEmpty(products)
        ? orderBy(
            products.map((entry: ArrayElement<MonitorData>) => ({
              display_size: entry?.display_size?.data?.attributes?.Size ?? "",
              id: entry!.id,
              get link() {
                return getProductLink(Enum_Product_Type.Monitor, this.slug);
              },
              manufacturer: entry?.manufacturer?.data?.attributes?.Name ?? "",
              name: `${entry?.manufacturer?.data?.attributes?.Name} ${entry?.Product_Name}`,
              price: entry?.Price ?? 0,
              productCardImage: {
                alt: entry?.Image.data[0]?.attributes?.alternativeText ?? "monitor image",
                height: entry?.Image.data[0]?.attributes?.formats?.small?.height,
                url:
                  entry?.Image.data[0]?.attributes?.formats?.small?.url ||
                  entry?.Image.data[0]?.attributes?.url ||
                  notFoundImage,
                width: entry?.Image.data[0]?.attributes?.formats?.small?.width,
              },
              productCardSubtitle: [
                entry!.display_size?.data?.attributes?.Size,
                entry!.resolution?.data?.attributes?.Resolution,
                entry!.grade ? `${entry!.grade} rūšis` : "",
              ].join(", "),
              productDescription: entry?.Product_Description ?? "",
              productThumbnail: {
                alt: entry?.Image.data[0]?.attributes?.alternativeText ?? "monitor image",
                url: entry?.Image.data[0]?.attributes?.formats?.thumbnail?.url ?? notFoundImage,
              },
              quantity: entry?.Quantity ?? 0,
              slug: entry?.slug ?? "/",
            })),
            "price"
          )
        : [];

    case Enum_Product_Type.Other:
      return !isEmpty(products)
        ? orderBy(
            products.map((entry: ArrayElement<OtherProductsData>) => ({
              id: entry!.id,
              get link() {
                return getProductLink(Enum_Product_Type.Other, this.slug);
              },
              manufacturer: entry!.manufacturer?.data?.attributes?.Name ?? "",
              name: `${entry!.Product_Name}`,
              price: entry!.Price ?? 0,
              productCardImage: {
                alt: entry?.Image.data[0]?.attributes?.alternativeText ?? "other product image",
                height: entry?.Image.data[0]?.attributes?.formats?.small?.height,
                url:
                  entry?.Image.data[0]?.attributes?.formats?.small?.url ||
                  entry?.Image.data[0]?.attributes?.url ||
                  notFoundImage,
                width: entry?.Image.data[0]?.attributes?.formats?.small?.width,
              },
              productCardSubtitle: `${entry!.Product_Description}`,
              productModel: entry!.Other_product_model ?? "",
              productThumbnail: {
                alt: entry?.Image.data[0]?.attributes?.alternativeText ?? "other product image",
                url: entry?.Image.data[0]?.attributes?.formats?.thumbnail?.url ?? notFoundImage,
              },
              productType: entry!.other_product_type?.data?.attributes?.Type ?? "",
              quantity: entry!.Quantity,
              slug: entry!.slug ?? entry!.Product_Name,
            })),
            "price"
          )
        : [];

    default:
      return [];
  }
};

export default prepareProductData;
