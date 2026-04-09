import { styled, Typography } from "@mui/material";
import React from "react";
import { Enum_Product_Type } from "@/api/generated/graphql";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import MainLayout from "@/src/components/Layout";
import ProductImageRow from "@/src/components/ProductImageRow";
import ProductPurchaseButtonRow from "@/src/components/ProductPurchaseButtonRow";
import ProductTechSpecsTable from "@/src/components/ProductTechSpecsTable";
import styles from "@/src/components/ProductImageRow.module.css";
import { HidableContainer } from "@/src/components/elements/HidableContainer";
import GradeDescriptionBox from "@/src/components/GradeDescriptionBox";
import { Property } from "csstype";
import { PageNames, ProductEntryWithLink } from "@/src/helpers/types";
import { prepareCartItem } from "@/src/helpers/cart";
import InfoIcon from "@mui/icons-material/Info";
import { ProductJsonLd } from "next-seo";
import { isEmpty } from "lodash-es";
import { Trans, useTranslation } from "react-i18next";

const ProductContainer = styled("div")({
  display: "grid",
  gridTemplateRows: "1fr min-content",
});

export interface DescriptionContainerProps {
  display: Property.Display;
  displayOnTablet: Property.Display;
}

export const GradingDescriptionRow = ({ display, displayOnTablet }: DescriptionContainerProps) => (
  <HidableContainer displayOnTablet={displayOnTablet} display={display}>
    <GradeDescriptionBox />
  </HidableContainer>
);

const TechnicalSpecsRow = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "space-between",
});

const warningFontSize = { lg: "1rem", xs: "0.75rem" };

const determineProductPageNameByType = (type: Partial<Enum_Product_Type>): PageNames => {
  switch (type) {
    case Enum_Product_Type.Laptop:
      return "Nesiojami";
    case Enum_Product_Type.Tower:
      return "Stacionarus";
    case Enum_Product_Type.Monitor:
      return "Monitoriai";
    default:
      return "Nesiojami";
  }
};

const ProductPage: React.FC<{
  type: Partial<Enum_Product_Type>;
  title: string;
  product?: ProductEntryWithLink;
  breadcrumbs: BreadcrumbList;
}> = ({ type, breadcrumbs, product }) => {
  const { t } = useTranslation(["product", "common", "nesiojami", "meta"]);

  const cartItem = prepareCartItem(product, type);

  const imageArray = (
    Object.values(product?.Image?.data?.[0]?.attributes?.formats ?? {}) as Array<{
      url?: string;
    }>
  )
    .map(({ url }) => url)
    .filter((it) => it);

  return (
    <>
      <ProductJsonLd
        productName={product?.Product_Name ?? ""}
        images={isEmpty(imageArray) ? [] : (imageArray as Array<string>)}
        description={
          product && "Product_Description" in product ? product.Product_Description ?? "" : product?.Product_Name ?? ""
        }
        brand={product?.manufacturer?.data?.attributes?.Name ?? ""}
        manufacturerName={product?.manufacturer?.data?.attributes?.Name ?? ""}
        offers={[
          {
            availability:
              product?.Quantity && product.Quantity > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            itemCondition: "https://schema.org/UsedCondition",
            price: product?.Price?.toFixed() ?? "",
            priceCurrency: "EUR",
            priceValidUntil: "2040-11-05",
            seller: {
              name: "UAB Kompservisas",
            },
            url: `https://kompservisas.lt/${product?.link ?? ""}`,
          },
        ]}
      />
      <MainLayout pageName={determineProductPageNameByType(type)}>
        <div style={{ marginTop: "2rem" }}>
          <BreadcrumbList breadcrumbList={breadcrumbs} />
        </div>
        <ProductContainer>
          {cartItem && (
            <>
              <ProductImageRow product={product} cartItem={cartItem} />
              <Typography sx={{ fontSize: warningFontSize, marginBottom: "1rem", textAlign: "left" }}>
                <InfoIcon sx={{ fontSize: warningFontSize }} color="action" />{" "}
                {t("nesiojami:section1_product_description_photo_discrepancy")}
              </Typography>
              <ProductPurchaseButtonRow
                product={product}
                display="none"
                displayOnTablet={"flex"}
                className={styles.purchaseButtonMobile}
                cartItem={cartItem}
              />
            </>
          )}
          <TechnicalSpecsRow>
            <Typography fontSize={20}>
              <Trans i18nKey="section2_technical_specifications" ns="nesiojami">
                <strong>Techniniai duomenys</strong>
              </Trans>
            </Typography>
            <ProductTechSpecsTable product={product} type={type} />
          </TechnicalSpecsRow>
          {(type === Enum_Product_Type.Laptop || type === Enum_Product_Type.Tower) && (
            <GradingDescriptionRow displayOnTablet={"flex"} display={"none"} />
          )}
        </ProductContainer>
      </MainLayout>
    </>
  );
};

export default ProductPage;
