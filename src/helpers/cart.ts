import { Enum_Product_Type } from "@/api/generated/graphql";
import { notFoundImage, Pages } from "@/src/metaData";
import { CartItem, ProductEntry } from "@/src/helpers/types";

export const prepareCartItem = (product: ProductEntry, type: Partial<Enum_Product_Type>): CartItem | undefined => {
  if (type === Enum_Product_Type.Laptop && product) {
    return {
      cartImageAlt: product.Product_Name,
      cartImageUrl: product.Image.data[0]?.attributes?.formats.thumbnail?.url ?? notFoundImage,
      cartItemDescription: [
        "CPU" in product ? product.CPU?.data?.attributes?.Name : "",
        "storage_ssd" in product
          ? product.storage_ssd?.data?.attributes?.Size
          : "storage_hdd" in product
          ? product.storage_hdd?.data?.attributes?.Size
          : "",
        "display_size" in product ? product.display_size?.data?.attributes?.Size : "",
        "ram" in product ? product.ram?.data?.attributes?.RAM : "",
        "grade" in product ? (product.grade ? `${product.grade} rūšis` : "") : "",
      ].join(","),
      cartItemLink: `${Pages.Nesiojami.fallBackPath}/${product.slug!}`,
      cartItemName: product.Product_Name,
      id: product.id!,
      price: product.Price,
      quantity: product.Quantity,
    };
  }

  if (type === Enum_Product_Type.Tower && product) {
    return {
      cartImageAlt: product.Product_Name,
      cartImageUrl: product.Image.data[0]?.attributes?.formats.thumbnail?.url ?? notFoundImage,
      cartItemDescription: [
        "CPU" in product ? product.CPU?.data?.attributes?.Name : "",
        "storage_ssd" in product
          ? product.storage_ssd?.data?.attributes?.Size
          : "storage_hdd" in product
          ? product.storage_hdd?.data?.attributes?.Size
          : "",
        "ram" in product ? product.ram?.data?.attributes?.RAM : "",
        "grade" in product ? (product.grade ? `${product.grade} rūšis` : "") : "",
      ].join(","),
      cartItemLink: `${Pages.Stacionarus.fallBackPath}/${product.slug!}`,
      cartItemName: product.Product_Name,
      id: product.id!,
      price: product.Price,
      quantity: product.Quantity,
    };
  }

  if (type === Enum_Product_Type.Monitor && product) {
    return {
      cartImageAlt: product.Product_Name,
      cartImageUrl: product.Image.data[0]?.attributes?.formats.thumbnail?.url ?? notFoundImage,
      cartItemDescription: ["display_size" in product ? product.display_size?.data?.attributes?.Size : ""].join(","),
      cartItemLink: `${Pages.Monitoriai.fallBackPath}/${product.slug!}`,
      cartItemName: product.Product_Name,
      id: product.id!,
      price: product.Price,
      quantity: product.Quantity,
    };
  }

  if (type === Enum_Product_Type.Other && product) {
    return {
      cartImageAlt: product.Product_Name,
      cartImageUrl: product.Image.data[0]?.attributes?.formats.thumbnail?.url ?? notFoundImage,
      cartItemDescription: "",
      cartItemLink: `${Pages.KitosPrekes.fallBackPath}/${product.slug!}`,
      cartItemName: product.Product_Name,
      id: product.id!,
      price: product.Price,
      quantity: product.Quantity,
    };
  }

  return undefined;
};
