import { Theme } from "@mui/material";
import { styled, SxProps } from "@mui/system";
import theme from "@/src/theme";

const paragraph: SxProps<Theme> = {
  fontSize: "1.5rem",
  marginTop: "1.5rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    textAlign: "justify",
  },
};

const shopImageRow = {
  display: "grid",
  gap: theme.spacing(6),
  gridTemplateColumns: "2fr 1fr",
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(4),
    gridTemplateColumns: "1fr",
  },
};

const subtitle: SxProps<Theme> = {
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
};

const ApieMusContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  marginBottom: theme.spacing(8),
  marginTop: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
});

const ShopImageRow = styled("div")({
  ...shopImageRow,
});

const ThinkpadsImageRow = styled("div")({
  ...shopImageRow,
  gridTemplateColumns: "1fr 2fr",
});

export const ParagraphContainer = styled("div")(({ displayOnMobile = false }: { displayOnMobile: boolean }) => ({
  display: displayOnMobile ? "none" : "block",
  [theme.breakpoints.down("md")]: {
    display: displayOnMobile ? "block" : "none",
  },
}));

export const Styled = {
  ApieMusContainer,
  ParagraphContainer,
  ShopImageRow,
  ThinkpadsImageRow,
};

const apieMusStyles = {
  paragraph,
  shopImageRow,
  subtitle,
};

export default apieMusStyles;
