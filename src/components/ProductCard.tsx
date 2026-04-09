import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider, SxProps, Theme, useTheme } from "@mui/material";
import { ShoppingBagTwoTone } from "@mui/icons-material";
import { CartItem } from "@/src/helpers/types";
import useManageCart from "@/src/hooks/useManageCart";
import { useGetEshopStateQuery } from "@/api/graphql-hooks";
import * as gtag from "@/utils/gtag";
import { reduceCloudinaryImageSize } from "@/src/helpers/utils";
import { useTranslation } from "next-i18next";

const isProduction = process.env.NODE_ENV === "production";

const cardStyles = (theme: Theme, isRecommendedCard: boolean): SxProps<Theme> => ({
  "&:hover": {
    boxShadow: "0 4px 30px 0 rgb(0 0 0 / 16%)",
    transform: "translateY(-4px);",
    transition: "0.2s",
  },
  maxWidth: "21.25rem",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  ...(isRecommendedCard
    ? {
        border: "unset",
        boxShadow: "unset",
      }
    : {}),
});

const titleStyles = {
  fontSize: "clamp(1.0625rem, 0.95rem + 0.4vw, 1.25rem)",
  maxWidth: "24ch",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const descriptionStyles = {
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  display: "-webkit-box",
  overflow: "hidden",
};

const cardActionStyles = (theme: Theme, isEshopEnabled?: boolean): SxProps<Theme> => ({
  display: "flex",
  justifyContent: !isEshopEnabled ? "flex-end" : "space-between",
  padding: theme.spacing(3),
});

const ProductCard: React.FC<{
  isRecommendedCard?: boolean;
  product?: CartItem & {
    productCardImage: {
      alt: string;
      url: any;
      width: number;
      height: number;
    };
  };
  onClick: () => void;
}> = ({ isRecommendedCard = false, product, onClick }) => {
  const theme = useTheme();
  const { isAddToCartDisabled, addToCart } = useManageCart(product);

  const { t } = useTranslation("common");

  const { data } = useGetEshopStateQuery();

  const isEshopEnabled = data?.eshops?.data[0]?.attributes?.Enabled;

  return product ? (
    <Card sx={cardStyles(theme, isRecommendedCard)}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          alt={product.cartImageAlt}
          component="img"
          image={reduceCloudinaryImageSize(product.productCardImage.url)}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 340px"
          srcSet=""
          sx={{
            aspectRatio: "4 / 3",
            height: "auto",
            maxHeight: "min(14.375rem, 48vw)",
            objectFit: "cover",
            width: "100%",
          }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ ...titleStyles }}>
            {product.cartItemName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              ...descriptionStyles,
            }}
          >
            {product.cartItemDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      {!isRecommendedCard && (
        <>
          <Divider />
          <CardActions sx={{ ...cardActionStyles(theme, isEshopEnabled) }}>
            <>
              {!!isEshopEnabled && (
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    addToCart(product);
                    if (isProduction)
                      gtag.event({
                        action: "add_to_cart",
                        category: "ecommerce",
                        label: "method",
                        value: product.price,
                      });
                  }}
                  disabled={product.quantity > 0 ? isAddToCartDisabled : true}
                >
                  <ShoppingBagTwoTone fontSize="small" /> &nbsp; {t("add_to_cart")}
                </Button>
              )}
              {product.quantity > 0 ? (
                <Typography fontSize={20}>
                  {t("quantity", { count: product.quantity })} | {product.price} €
                </Typography>
              ) : (
                <Typography fontSize={20} sx={{ color: "text.secondary" }}>
                  {t("quantity_sold_out")}
                </Typography>
              )}
            </>
          </CardActions>
        </>
      )}
    </Card>
  ) : null;
};

export default ProductCard;
