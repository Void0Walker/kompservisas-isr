import { ShoppingBagTwoTone } from "@mui/icons-material";
import { Typography, Button, SxProps, Theme, useTheme } from "@mui/material";
import { Property } from "csstype";
import { useGetEshopStateQuery } from "@/api/graphql-hooks";
import { CartItem, ProductEntry } from "@/src/helpers/types";
import useManageCart from "@/src/hooks/useManageCart";
import { HidableContainer } from "@/src/components/elements/HidableContainer";
import { Trans, useTranslation } from "react-i18next";

const purchaseButtonStyles = { maxWidth: "35%", padding: "0.5rem" };

const ProductPurchaseButtonRow = ({
  product,
  displayOnTablet,
  display,
  className,
  cartItem,
}: {
  product: ProductEntry;
  display: Property.Display;
  displayOnTablet: Property.Display;
  className?: string;
  cartItem: CartItem;
}) => {
  const theme = useTheme();
  const { t } = useTranslation("common");
  const { isAddToCartDisabled, addToCart } = useManageCart(cartItem);

  const { data } = useGetEshopStateQuery();

  const isEshopEnabled = data?.eshops?.data[0]?.attributes?.Enabled;

  const fontSize = displayOnTablet !== "none" ? 20 : 32;

  const explanationStyles: SxProps<Theme> = {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
  };

  return (
    <HidableContainer display={display} displayOnTablet={displayOnTablet} className={className}>
      <div>
        <Typography fontSize={fontSize}>{product?.Product_Name}</Typography>
      </div>
      <div>
        <Typography fontSize={fontSize}>
          <Trans
            i18nKey="section1_product_description_price"
            ns="nesiojami"
            defaults="Price: <strong>{{value}} €</strong>"
            values={{ value: product?.Price ?? 0 }}
            components={{ strong: <strong /> }}
          >
            {null}
          </Trans>
        </Typography>
      </div>
      <Typography
        sx={{
          color: "text.secondary",
        }}
      >
        <Trans
          i18nKey="section1_product_description_qnt"
          ns="nesiojami"
          defaults="Quantity: <strong>{{value}}</strong>"
          values={{ value: product?.Quantity ?? 1 }}
          components={{ strong: <strong /> }}
        >
          {null}
        </Trans>
      </Typography>

      {!isEshopEnabled ? (
        <Typography sx={explanationStyles}>
          <Trans i18nKey={"section1_product_address_note"} ns="nesiojami">
            Prekę galite įsigyti adresu <strong>Algirdo g. 32 / Šaltinių g. 2</strong>
          </Trans>
        </Typography>
      ) : (
        <Button
          disabled={product && product?.Quantity > 0 ? isAddToCartDisabled : true}
          variant="contained"
          sx={{ ...purchaseButtonStyles }}
          onClick={() => addToCart(cartItem)}
        >
          <ShoppingBagTwoTone fontSize="medium" /> &nbsp; {t("add_to_cart")}
        </Button>
      )}
    </HidableContainer>
  );
};

export default ProductPurchaseButtonRow;
