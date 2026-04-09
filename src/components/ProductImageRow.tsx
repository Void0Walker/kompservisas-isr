import styled from "@emotion/styled";
import React from "react";
import GradingSystem from "@/src/components/GradingSystem";
import theme from "@/src/theme";
import Image from "next/image";
import styles from "@/src/components/ProductImageRow.module.css";
import ProductPurchaseButtonRow from "@/src/components/ProductPurchaseButtonRow";
import { GradingDescriptionRow } from "@/src/components/ProductPage";
import { CartItem, ProductEntry } from "@/src/helpers/types";

interface Props {
  product: ProductEntry;
  cartItem: CartItem;
}

const ImageContainer = styled("div")({
  height: "40vh",
  position: "relative",
  width: "75%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
});

const ProductImageRow: React.FC<Props> = ({ product, cartItem }) => {
  return (
    <div className={styles.imageArea}>
      <ImageContainer>
        {product?.grade && <GradingSystem grade={product.grade} />}
        {product?.Image && (
          <Image
            src={product.Image.data[0]?.attributes?.url ?? ""}
            alt={product.Image.data[0]?.attributes?.alternativeText ?? "product image"}
            fill
            sizes="(max-width: 768px) 100vw, 75vw"
            style={{ objectFit: "contain" }}
            priority
            className={styles.image}
          />
        )}
      </ImageContainer>
      <div className={styles.purchaseActionArea}>
        <ProductPurchaseButtonRow
          display="flex"
          displayOnTablet={"none"}
          className={styles.purchaseButtonStyles}
          product={product}
          cartItem={cartItem}
        />
        <GradingDescriptionRow displayOnTablet={"none"} display={"flex"} />
      </div>
    </div>
  );
};

export default ProductImageRow;
