import { Enum_Product_Type, GetRecommendedProductsQuery } from "@/api/generated/graphql";
import { notFoundImage, Pages } from "@/src/metaData";

const preparePagrindinisData = (recommendedProducts: GetRecommendedProductsQuery["recommendedProducts"]) =>
  recommendedProducts?.data
    .map((product) => ({
      cartItem: product
        ? {
            cartImageAlt: product.attributes?.product?.data?.attributes?.Product_Name ?? "",
            cartImageUrl:
              product.attributes?.product?.data?.attributes?.Image.data[0]?.attributes?.formats?.thumbnail?.url ??
              notFoundImage,
            get cartItemDescription() {
              switch (this.type) {
                case Enum_Product_Type.Laptop:
                  return [
                    product.attributes?.product?.data?.attributes?.CPU?.data?.attributes?.Name,
                    product.attributes?.product?.data?.attributes?.storage_ssd?.data?.attributes?.Size ||
                      product.attributes?.product?.data?.attributes?.storage_hdd?.data?.attributes?.Size,
                    product.attributes?.product?.data?.attributes?.display_size?.data?.attributes?.Size,
                  ].join(", ");
                case Enum_Product_Type.Tower:
                  return [
                    product.attributes?.product?.data?.attributes?.CPU?.data?.attributes?.Name,
                    product.attributes?.product?.data?.attributes?.storage_ssd?.data?.attributes?.Size ||
                      product.attributes?.product?.data?.attributes?.storage_hdd?.data?.attributes?.Size,
                  ].join(", ");
                case Enum_Product_Type.Monitor:
                  return [product.attributes?.product?.data?.attributes?.display_size?.data?.attributes?.Size].join(
                    ", "
                  );

                default:
                  return "";
              }
            },
            get cartItemLink() {
              switch (this.type) {
                case Enum_Product_Type.Laptop:
                  return `${Pages.Nesiojami.fallBackPath}/${
                    product?.attributes?.product?.data?.attributes?.slug ?? ""
                  }`;
                case Enum_Product_Type.Tower:
                  return `${Pages.Stacionarus.fallBackPath}/${
                    product?.attributes?.product?.data?.attributes?.slug ?? ""
                  }`;
                case Enum_Product_Type.Monitor:
                  return `${Pages.Monitoriai.fallBackPath}/${
                    product?.attributes?.product?.data?.attributes?.slug ?? ""
                  }`;
                default:
                  return "";
              }
            },
            cartItemName: product.attributes?.product?.data?.attributes?.Product_Name ?? "",
            id: product.id ?? "",
            price: product.attributes?.product?.data?.attributes?.Price ?? 0,
            productCardImage: {
              alt: product.attributes?.product?.data?.attributes?.Product_Name ?? "",
              url:
                product.attributes?.product?.data?.attributes?.Image.data[0]?.attributes?.formats?.small.url ??
                notFoundImage,
              height:
                product.attributes?.product?.data?.attributes?.Image.data[0]?.attributes?.formats?.small.height ?? 0,
              width:
                product.attributes?.product?.data?.attributes?.Image.data[0]?.attributes?.formats?.small.width ?? 0,
            },
            quantity: product.attributes?.product?.data?.attributes?.Quantity ?? 0,
            type: product.attributes?.product?.data?.attributes?.Type,
          }
        : undefined,
      position: product.attributes?.Position,
      type: product.attributes?.product?.data?.attributes?.Type,
    }))
    .filter(({ cartItem }) => cartItem)
    .slice(0, 4);

export default preparePagrindinisData;
