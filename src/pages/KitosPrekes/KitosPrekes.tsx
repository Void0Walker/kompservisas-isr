import { isArray, isEmpty, orderBy } from "lodash-es";
import { useRouter } from "next/router";
import React from "react";
import { Enum_Product_Type } from "@/api/generated/graphql";
import ProductCardContainer from "@/src/components/elements/ProductCardContainer";
import ProductGrid from "@/src/components/elements/ProductGrid";
import MainLayout from "@/src/components/Layout";
import PriceSortButtons from "@/src/components/PriceSortButtons";
import ProductCard from "@/src/components/ProductCard";
import { generatePathFromTypeAndSlug } from "@/src/helpers/pathUtils";
import prepareProductData from "@/src/helpers/product";
import {
  ManufacturerData,
  ManufacturerFilter,
  OtherProductFilter,
  OtherProducts,
  OtherProductsData,
  OtherProductTypeData,
  SortOrder,
  SortOrderTypes,
} from "@/src/helpers/types";
import { lowerCaseArray } from "@/src/helpers/utils";
import { Pages } from "@/src/metaData";
import KitosPrekesFilters from "@/src/pages/KitosPrekes/KitosPrekesFilters";
import { useTranslation } from "react-i18next";

const productCardContainerHeader = {
  gridColumn: "1 / -1",
  justifySelf: "stretch",
};

const KitosPrekes: React.FC<{
  manufacturerData?: ManufacturerData;
  sortOrder?: SortOrder;
  manufacturerFilters?: ManufacturerFilter;
  otherProductFilters?: OtherProductFilter;
  otherProductsData?: OtherProductsData;
  otherProductTypeData?: OtherProductTypeData;
}> = ({
  manufacturerData,
  sortOrder,
  manufacturerFilters,
  otherProductsData,
  otherProductFilters,
  otherProductTypeData,
}) => {
  const { t } = useTranslation(["common"]);

  const router = useRouter();

  const otherProducts = otherProductsData
    ? prepareProductData(
        otherProductsData,
        Enum_Product_Type.Other,
        generatePathFromTypeAndSlug(t("header_link_kitos_prekes_path"))
      )
    : [];

  const filteredManufacturers = manufacturerFilters
    ? Object.fromEntries(
        isArray(manufacturerFilters["gamintojas"])
          ? manufacturerFilters["gamintojas"].map((filterName) => [filterName, true])
          : [[manufacturerFilters.gamintojas, true]]
      )
    : {};

  const filteredProductTypes = otherProductFilters
    ? Object.fromEntries(
        isArray(otherProductFilters["prekes_tipas"])
          ? otherProductFilters["prekes_tipas"].map((filterName) => [filterName, true])
          : [[otherProductFilters.prekes_tipas, true]]
      )
    : {};

  let filteredOtherProducts = otherProducts as OtherProducts;

  if (!isEmpty(filteredManufacturers)) {
    filteredOtherProducts = filteredOtherProducts.filter(({ manufacturer }) =>
      lowerCaseArray(Object.keys(filteredManufacturers)).includes(manufacturer.toLowerCase())
    );
  }

  if (!isEmpty(filteredProductTypes)) {
    filteredOtherProducts = filteredOtherProducts.filter(({ productType }) =>
      lowerCaseArray(Object.keys(filteredProductTypes)).includes(productType.toLowerCase())
    );
  }

  const sortedOtherProducts = !isEmpty(sortOrder)
    ? orderBy(filteredOtherProducts, "price", sortOrder?.rusiavimas === SortOrderTypes.FromLowest ? "asc" : "desc")
    : filteredOtherProducts;

  const breadcrumbs = [
    {
      linkName: t("common:header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("common:header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("common:header_link_kitos_prekes") ?? Pages.KitosPrekes.name,
      linkPath: t("common:header_link_kitos_prekes_path") ?? Pages.KitosPrekes.fallBackPath,
    },
  ];

  return (
    <MainLayout pageName={Pages.KitosPrekes.name}>
      <ProductGrid>
        <KitosPrekesFilters
          breadcrumbs={breadcrumbs}
          manufacturerData={manufacturerData}
          otherProductTypeData={otherProductTypeData}
        />
        <ProductCardContainer>
          <PriceSortButtons sortOrder={sortOrder} styles={productCardContainerHeader} />
          {sortedOtherProducts?.map((product, index) => (
            <ProductCard
              key={product.name + index}
              product={
                product.id
                  ? {
                      cartImageAlt: product.name,
                      cartImageUrl: product.productThumbnail.url,
                      cartItemDescription: product.productCardSubtitle,
                      cartItemLink: product.link,
                      cartItemName: product.name,
                      id: product.id,
                      price: product.price,
                      productCardImage: product.productCardImage,
                      quantity: product.quantity,
                    }
                  : undefined
              }
              onClick={() => router.push(product.link)}
            />
          ))}
        </ProductCardContainer>
      </ProductGrid>
    </MainLayout>
  );
};

export default KitosPrekes;
