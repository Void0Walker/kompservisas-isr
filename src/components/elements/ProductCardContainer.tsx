import styled from "@emotion/styled";
import theme from "@/src/theme";

const ProductCardContainer = styled("div")({
  alignItems: "center",
  display: "grid",
  gap: "3rem",
  gridAutoRows: "minmax(min-content, max-content)",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  justifyItems: "stretch",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    justifyItems: "center",
  },
});

export default ProductCardContainer;
