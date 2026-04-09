import { Button, Link, List, ListItem, Paper, styled, Typography, useTheme } from "@mui/material";
import React from "react";
import { Item, useCart } from "react-use-cart";
import { DeleteButtonContainer } from "@/src/components/elements/CartContainer";
import flexContainer from "@/src/mixins/flexContainer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  "&:hover": {
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  borderRadius: "unset",
  display: "flex",
  img: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "150px",
    marginRight: "1rem",
    maxWidth: "150px",
    objectFit: "contain",
  },
  width: "100%",
}));

const ItemDescriptionContainer = styled("div")({
  ...flexContainer("start", "0.5rem", "column", "flex-start"),
});

const KrepselisItemsList: React.FC = () => {
  const theme = useTheme();
  const { items, removeItem } = useCart();

  return (
    <div>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "4rem",
          [theme.breakpoints.down("md")]: {
            marginTop: "unset",
          },
        }}
      >
        <Typography fontSize={20} sx={{ marginLeft: "1rem" }}>
          Jūsų prekių krepšelis
        </Typography>
        {items.map((item: Item) => (
          <ListItem key={item.id}>
            <StyledPaper elevation={1}>
              <img src={item.cartImageUrl} alt={item.cartImageAlt} />
              <ItemDescriptionContainer>
                <Link href={item.cartItemLink}>{item.cartItemName}</Link>
                <div>{item.cartItemDescription}</div>
                <Typography
                  sx={{
                    fontSize: 20,
                    [theme.breakpoints.down("md")]: {
                      fontSize: "1rem",
                    },
                  }}
                >
                  {item.price} € | kiekis: {item.quantity}
                </Typography>
              </ItemDescriptionContainer>
            </StyledPaper>
            <DeleteButtonContainer
              sx={{ bottom: "20px", right: "20px", [theme.breakpoints.down("sm")]: { bottom: "10px", left: "20px" } }}
            >
              <Button
                size="small"
                onClick={() => removeItem(item.id)}
                sx={{ color: "text.secondary", textTransform: "none" }}
              >
                trinti
              </Button>
            </DeleteButtonContainer>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default KrepselisItemsList;
