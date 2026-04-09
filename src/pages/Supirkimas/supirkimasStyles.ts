import styled from "@emotion/styled";
import theme from "@/src/theme";

const SupirkimasContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "4rem",
  marginTop: "3rem",
  [theme.breakpoints.down("md")]: {
    marginBottom: "2rem",
    marginTop: "2rem",
  },
});

const BuyUpRow = styled("div")({
  display: "grid",
  gap: "3rem",
  gridTemplateColumns: "1fr 2fr",
  [theme.breakpoints.down("md")]: {
    gap: "2rem",
    gridTemplateColumns: "1fr",
  },
});

export const Styled = {
  BuyUpRow,
  SupirkimasContainer,
};
