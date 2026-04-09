import styled from "@emotion/styled";
import theme from "@/src/theme";

const ProductGrid = styled("div")({
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "1fr 4fr",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
});

export default ProductGrid;
