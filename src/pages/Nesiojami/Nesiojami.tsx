import { isEmpty, orderBy } from "lodash-es";
import React from "react";
import ProductCardContainer from "@/src/components/elements/ProductCardContainer";
import ProductGrid from "@/src/components/elements/ProductGrid";
import MainLayout from "@/src/components/Layout";
import PriceSortButtons from "@/src/components/PriceSortButtons";
import ProductCard from "@/src/components/ProductCard";
import { generatePathFromTypeAndSlug } from "@/src/helpers/pathUtils";
import { prepareFilteredLaptopData } from "@/src/helpers/product";
import { ComputerPageType, FilteredLaptopData, LaptopProducts, SortOrderTypes } from "@/src/helpers/types";
import { Pages } from "@/src/metaData";
import NesiojamiFilters from "@/src/pages/Nesiojami/NesiojamiFilters";
import { useTheme, useMediaQuery, Typography } from "@mui/material";
import PaginationButtons from "@/src/components/PaginationButtons";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Box } from "@mui/system";

const productCardContainerHeader = {
  gridColumn: "1 / -1",
  justifySelf: "stretch",
};

type LaptopsProps = ComputerPageType & {
  page: number;
  filteredLaptopData?: FilteredLaptopData;
  pageCount?: number;
  isMobile?: boolean;
};

const Nesiojami: React.FC<LaptopsProps> = ({
  manufacturerData,
  filteredLaptopData,
  sortOrder,
  cpuData,
  displaySizeData,
  ssdData,
  pageCount,
  isMobile,
  page,
}) => {
  const { t } = useTranslation(["common", "meta"]);

  const theme = useTheme();

  const router = useRouter();

  const laptops = filteredLaptopData
    ? prepareFilteredLaptopData(filteredLaptopData, generatePathFromTypeAndSlug(t("header_link_nesiojami_path")))
    : [];

  const isMobileFECheck = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const sortedLaptops = (
    !isEmpty(sortOrder)
      ? orderBy(laptops, "price", sortOrder?.rusiavimas === SortOrderTypes.FromLowest ? "asc" : "desc")
      : laptops
  ) as LaptopProducts;

  const mobile = isMobile && isMobileFECheck;

  const breadcrumbs = [
    {
      linkName: t("header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("header_link_nesiojami") ?? Pages.Nesiojami.name,
      linkPath: t("header_link_nesiojami_path") ?? Pages.Nesiojami.fallBackPath,
    },
  ];

  return (
    <MainLayout pageName={Pages.Nesiojami.name}>
      <ProductGrid>
        <NesiojamiFilters
          breadcrumbs={breadcrumbs}
          manufacturerData={manufacturerData}
          cpuData={cpuData}
          displaySizeData={displaySizeData}
          ssdData={ssdData}
        />
        <ProductCardContainer>
          <PriceSortButtons sortOrder={sortOrder} styles={productCardContainerHeader} />
          <Box sx={{ gridColumn: "1 / -1" }}>
            <Typography variant="body1">{t("common:disclaimer_laptops")}</Typography>
          </Box>
          {sortedLaptops.map(
            ({ productCardImage, name, id, productThumbnail, productCardSubtitle, price, quantity, link }, index) => (
              <ProductCard
                key={name + index}
                product={
                  id
                    ? {
                        cartImageAlt: name,
                        cartImageUrl: productThumbnail.url,
                        cartItemDescription: productCardSubtitle,
                        cartItemLink: link,
                        cartItemName: name,
                        id,
                        price,
                        productCardImage,
                        quantity,
                      }
                    : undefined
                }
                onClick={() => router.push(link)}
              />
            )
          )}
          {mobile && pageCount && <PaginationButtons pageCount={pageCount} page={page} />}
        </ProductCardContainer>
      </ProductGrid>
    </MainLayout>
  );
};

export default Nesiojami;
