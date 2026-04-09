import {
  Badge,
  BadgeProps,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowRightSharp from "@mui/icons-material/ArrowRightSharp";

import { useCart } from "react-use-cart";
import Link from "@/src/Link";
import { DeleteTwoTone } from "@mui/icons-material";
import { CartItem } from "@/src/helpers/types";
import { useRouter } from "next/router";
import { Pages } from "@/src/metaData";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    right: -3,
    top: 13,
  },
}));

const ActionContainer = styled("div")({
  alignItems: "center",
  display: "flex",
});

export const DeleteButtonContainer = styled("div")({
  bottom: "10px",
  position: "absolute",
  right: "10px",
});

const CartContainer = () => {
  const theme = useTheme();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const { isEmpty, items, updateItemQuantity, totalItems } = useCart();

  const [displayedEntries, setDisplayedItems] = useState<number>(0);

  useEffect(() => setDisplayedItems(totalItems), [totalItems]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const cartListStyles = {
    " > li": {
      img: {
        height: "100px",
        marginRight: "0.5rem",
        maxWidth: "100px",
        objectFit: "contain",
      },
    },
    maxWidth: 450,
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  };

  return (
    <div>
      <Button
        sx={{
          textTransform: "unset",
        }}
        aria-label="cart"
        aria-describedby={id}
        onClick={handleClick}
      >
        <StyledBadge badgeContent={displayedEntries} color="primary">
          <ShoppingCartIcon sx={{ color: "text.primary" }} />
        </StyledBadge>
        <Typography
          sx={{
            marginLeft: "1rem",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          Krepšelis
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <List sx={{ ...cartListStyles }}>
          {!isEmpty &&
            (items as CartItem[]).map((product: CartItem) => (
              <React.Fragment key={product.id}>
                <ListItem alignItems="flex-start" style={{ position: "relative" }}>
                  <img src={product.cartImageUrl} alt={product.cartImageAlt} />
                  <ListItemText
                    primary={
                      <Link href={product.cartItemLink} sx={{ textDecoration: "none" }}>
                        {product.cartItemName}
                      </Link>
                    }
                    secondary={product.cartItemDescription}
                  />
                  <DeleteButtonContainer>
                    <ActionContainer>
                      {product.quantity} vnt.
                      <IconButton size="small" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>
                        <DeleteTwoTone />
                      </IconButton>
                    </ActionContainer>
                  </DeleteButtonContainer>
                </ListItem>
              </React.Fragment>
            ))}
          {!isEmpty && (
            <ListItem alignItems="center">
              <Button
                variant="contained"
                endIcon={<ArrowRightSharp />}
                sx={{ width: "100%" }}
                disableElevation
                onClick={() => router.push(Pages.Krepselis.fallBackPath)}
              >
                Užsakyti
              </Button>
            </ListItem>
          )}
          {isEmpty && (
            <div style={{ padding: "1rem" }}>
              <Typography>Jūsų krepšelyje nėra prekių</Typography>
            </div>
          )}
        </List>
      </Popover>
    </div>
  );
};

export default CartContainer;
