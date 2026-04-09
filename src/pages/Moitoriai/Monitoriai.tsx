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
  DisplaySizeData,
  DisplaySizeFilter,
  ManufacturerData,
  ManufacturerFilter,
  MonitorData,
  MonitorProducts,
  SortOrder,
  SortOrderTypes,
} from "@/src/helpers/types";
import { lowerCaseArray } from "@/src/helpers/utils";
import { Pages } from "@/src/metaData";
import MonitoriaiFilters from "@/src/pages/Moitoriai/MonitoriaiFilters";
import { useTranslation } from "react-i18next";

const productCardContainerHeader = {
  gridColumn: "1 / -1",
  justifySelf: "stretch",
};

const getMonitorProduct = (product: MonitorProducts[0]) =>
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
    : undefined;

const Monitoriai: React.FC<{
  manufacturerData?: ManufacturerData;
  sortOrder?: SortOrder;
  displaySizeData?: DisplaySizeData;
  manufacturerFilters?: ManufacturerFilter;
  monitorData?: MonitorData;
  displaySizeFilters?: DisplaySizeFilter;
}> = ({ manufacturerData, monitorData, sortOrder, displaySizeData, manufacturerFilters, displaySizeFilters }) => {
  const { t } = useTranslation(["common", "meta", "nesiojami"]);

  const router = useRouter();

  const monitors = monitorData
    ? prepareProductData(
        monitorData,
        Enum_Product_Type.Monitor,
        generatePathFromTypeAndSlug(t("header_link_monitoriai_path"))
      )
    : [];

  const filteredManufacturers = manufacturerFilters
    ? Object.fromEntries(
        isArray(manufacturerFilters["gamintojas"])
          ? manufacturerFilters["gamintojas"].map((filterName) => [filterName, true])
          : [[manufacturerFilters.gamintojas, true]]
      )
    : {};

  const filteredDisplays = displaySizeFilters
    ? Object.fromEntries(
        isArray(displaySizeFilters["ekrano_dydis"])
          ? displaySizeFilters["ekrano_dydis"].map((filterName) => [filterName, true])
          : [[displaySizeFilters.ekrano_dydis, true]]
      )
    : {};

  let filteredMonitors = monitors as MonitorProducts;

  if (!isEmpty(filteredManufacturers)) {
    filteredMonitors = filteredMonitors.filter(({ manufacturer }) =>
      lowerCaseArray(Object.keys(filteredManufacturers)).includes(manufacturer.toLowerCase())
    );
  }

  if (!isEmpty(filteredDisplays)) {
    filteredMonitors = filteredMonitors.filter(({ display_size }) =>
      lowerCaseArray(Object.keys(filteredDisplays)).includes(display_size.toLowerCase())
    );
  }

  const sortedMonitors = !isEmpty(sortOrder)
    ? orderBy(filteredMonitors, "price", sortOrder?.rusiavimas === SortOrderTypes.FromLowest ? "asc" : "desc")
    : filteredMonitors;

  const breadcrumbs = [
    {
      linkName: t("header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("header_link_monitoriai") ?? Pages.Monitoriai.name,
      linkPath: t("header_link_monitoriai_path") ?? Pages.Monitoriai.fallBackPath,
    },
  ];

  return (
    <MainLayout pageName={Pages.Monitoriai.name}>
      <ProductGrid>
        <MonitoriaiFilters
          manufacturerData={manufacturerData}
          displaySizeData={displaySizeData}
          breadcrumbs={breadcrumbs}
        />
        <ProductCardContainer>
          <PriceSortButtons sortOrder={sortOrder} styles={productCardContainerHeader} />
          {sortedMonitors?.map((product, index) => (
            <ProductCard
              key={product.name + index}
              product={getMonitorProduct(product)}
              onClick={() => router.push(product.link)}
            />
          ))}
        </ProductCardContainer>
      </ProductGrid>
    </MainLayout>
  );
};

export default Monitoriai;
