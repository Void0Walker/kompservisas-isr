import styled from "@emotion/styled";
import theme from "@/src/theme";
import { DescriptionContainerProps } from "@/src/components/ProductPage";

export const HidableContainer = styled("div")(({ display, displayOnTablet }: DescriptionContainerProps) => ({
  display,
  [theme.breakpoints.down("md")]: {
    display: displayOnTablet,
  },
}));
