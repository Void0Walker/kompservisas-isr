import { Theme } from "@mui/material";
import { styled, SxProps } from "@mui/system";
import theme from "@/src/theme";

const checkIcon: SxProps<Theme> = {
  color: "#27AE60",
  fontSize: "3rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
};

const orderStatusPaper: SxProps<Theme> = {
  alignItems: "center",
  boxShadow: "0 4px 30px 0 rgb(0 0 0 / 10%)",
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(6),
  width: "100%",
};

const statusInfoText: SxProps<Theme> = {
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
};

const thankYouText: SxProps<Theme> = {
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
};

const OrderContainer = styled("div")({
  marginTop: theme.spacing(4),
});

const ThankYouComeAgainContainer = styled("div")({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  justifyContent: "center",
});

export const Styled = {
  OrderContainer,
  ThankYouComeAgainContainer,
};

const uzaskymasStyles = {
  checkIcon,
  orderStatusPaper,
  statusInfoText,
  thankYouText,
};

export default uzaskymasStyles;
