import { isEmpty, orderBy } from "lodash";
import { useRouter } from "next/router";
import React from "react";
import ProductCardContainer from "@/src/components/elements/ProductCardContainer";
import ProductGrid from "@/src/components/elements/ProductGrid";
import MainLayout from "@/src/components/Layout";
import PriceSortButtons from "@/src/components/PriceSortButtons";
import ProductCard from "@/src/components/ProductCard";
import { generatePathFromTypeAndSlug } from "@/src/helpers/pathUtils";
import { prepareFilteredTowerData } from "@/src/helpers/product";
import { ComputerPageType, FilteredTowerData, SortOrderTypes, TowerProducts } from "@/src/helpers/types";
import { Pages } from "@/src/metaData";
import StacionarusFilters from "@/src/pages/Stacionarus/StacionarusFilters";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "@/src/theme";
import PaginationButtons from "@/src/components/PaginationButtons";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const productCardContainerHeader = {
  gridColumn: "1 / -1",
  justifySelf: "stretch",
};

type TowerProps = ComputerPageType & {
  page: number;
  filteredTowerData?: FilteredTowerData;
  pageCount?: number;
  isMobile?: boolean;
};

const getTowerProduct = (product: TowerProducts[0]) =>
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

const Stacionarus: React.FC<TowerProps> = ({
  manufacturerData,
  filteredTowerData,
  sortOrder,
  cpuData,
  page,
  pageCount,
  isMobile,
}) => {
  const router = useRouter();

  const { t } = useTranslation(["common", "meta", "product"]);

  const breadcrumbs = [
    {
      linkName: t("header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("header_link_stacionarus") ?? Pages.Stacionarus.name,
      linkPath: t("header_link_stacionarus_path") ?? Pages.Stacionarus.fallBackPath,
    },
  ];

  const towers = filteredTowerData
    ? prepareFilteredTowerData(filteredTowerData, generatePathFromTypeAndSlug(t("header_link_stacionarus_path")))
    : [];

  const isMobileFECheck = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const sortedTowers = !isEmpty(sortOrder)
    ? orderBy(towers, "price", sortOrder?.rusiavimas === SortOrderTypes.FromLowest ? "asc" : "desc")
    : (towers as TowerProducts);

  const mobile = isMobile && isMobileFECheck;

  return (
    <MainLayout pageName={Pages.Stacionarus.name}>
      <ProductGrid>
        <StacionarusFilters breadcrumbs={breadcrumbs} manufacturerData={manufacturerData} cpuData={cpuData} />
        <ProductCardContainer>
          <PriceSortButtons sortOrder={sortOrder} styles={productCardContainerHeader} />
          <Box sx={{ gridColumn: "1 / -1" }}>
            <Typography variant="body1">{t("common:disclaimer_desktops")}</Typography>
          </Box>
          {sortedTowers?.map((product) => (
            <ProductCard
              key={product.name}
              product={getTowerProduct(product)}
              onClick={() => router.push(product.link)}
            />
          ))}
          {mobile && pageCount && <PaginationButtons pageCount={pageCount} page={page} />}
        </ProductCardContainer>
      </ProductGrid>
    </MainLayout>
  );
};

export default Stacionarus;
