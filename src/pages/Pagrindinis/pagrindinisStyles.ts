import type { SxProps, Theme } from "@mui/material";
import styled from "@emotion/styled";
import flexContainer from "@/src/mixins/flexContainer";
import slideOutAnimation from "@/src/mixins/slideOut";
import theme from "@/src/theme";

const MainBoxTextContainer = styled("div")({
  ...flexContainer("flex-start", undefined, "column", "flex-start"),
});

export function createPagrindinisStyles(themeArg: Theme) {
  const buttonPadding: SxProps<Theme> = {
    padding: `${themeArg.spacing(0.5)} ${themeArg.spacing(2.5)}`,
    [themeArg.breakpoints.down("md")]: {
      padding: `${themeArg.spacing(0.5)} ${themeArg.spacing(1.5)}`,
    },
  };

  const layoutContainerStyles: SxProps<Theme> = {
    ...flexContainer(),
    alignItems: "center",
    background: themeArg.palette.primary.main,
    borderRadius: "12px",
    fontWeight: "bold",
    height: 300,
    marginBottom: themeArg.spacing(6),
    marginTop: themeArg.spacing(6),
    padding: themeArg.spacing(6),
    position: "relative",
    width: "100%",
    [themeArg.breakpoints.down("md")]: {
      height: "200px",
      marginBottom: themeArg.spacing(4),
      marginTop: themeArg.spacing(4),
      padding: themeArg.spacing(4),
    },
  };

  const buyButtonStyles: SxProps<Theme> = {
    ...buttonPadding,
    ":hover": {
      background: themeArg.palette.background.paper,
      color: themeArg.palette.primary.main,
    },
    background: themeArg.palette.primary.main,
    border: `1px solid ${themeArg.palette.primary.contrastText}`,
    color: themeArg.palette.primary.contrastText,
    fontWeight: "400",
    marginTop: themeArg.spacing(6),
    [themeArg.breakpoints.down("lg")]: {
      marginTop: themeArg.spacing(4),
    },
  };

  const catalogueButtonStyles: SxProps<Theme> = {
    ...buttonPadding,
    alignSelf: "flex-end",
    background: themeArg.palette.primary.main,
    display: "flex",
    fontWeight: "400",
  };

  const lenovoE485Styles: SxProps<Theme> = {
    bottom: "-6%",
    height: 310,
    position: "absolute",
    right: "-2%",
    [themeArg.breakpoints.down("md")]: {
      height: 150,
    },
    [themeArg.breakpoints.down("xl")]: {
      right: "-1%",
    },
    [themeArg.breakpoints.down("sm")]: {
      height: 120,
      right: "+2%",
    },
  };

  const lenovoL480Styles: SxProps<Theme> = {
    bottom: "-20px",
    height: 220,
    position: "absolute",
    right: "-15px",
    ...slideOutAnimation,
    [themeArg.breakpoints.down("xl")]: {
      right: "+1%",
    },
    [themeArg.breakpoints.down("md")]: {
      height: 90,
      right: "-5px",
    },
    [themeArg.breakpoints.down("sm")]: {
      height: 90,
      right: "+3%",
    },
  };

  const dellTowersStyles: SxProps<Theme> = {
    bottom: "-30px",
    height: 220,
    position: "absolute",
    right: "-15px",
    ...slideOutAnimation,
    [themeArg.breakpoints.down("xl")]: {
      right: "+3%",
    },
    [themeArg.breakpoints.down("md")]: {
      height: 90,
      right: "-5px",
    },
    [themeArg.breakpoints.down("sm")]: {
      height: 90,
      right: "+5%",
    },
  };

  return {
    buyButtonStyles,
    catalogueButtonStyles,
    dellTowersStyles,
    layoutContainerStyles,
    lenovoE485Styles,
    lenovoL480Styles,
  };
}

const RecommendedContainer = styled("div")({
  marginTop: theme.spacing(6),
  ...flexContainer("space-between", "1rem", "row", "center"),
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export const Styled = {
  MainBoxTextContainer,
  RecommendedContainer,
};
