import { createTheme, type PaletteMode, type Theme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import {
  PAGE_GUTTER_LG,
  PAGE_GUTTER_MD,
  PAGE_GUTTER_XS,
} from "@/src/constants/pageSpacing";

const sharedTypography = {
  body1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.9375rem",
    lineHeight: 1.55,
  },
  fontFamily: "var(--font-inter, Inter), var(--font-nunito, Nunito), Arial, sans-serif",
  h1: {
    fontSize: "clamp(1.75rem, 1.15rem + 2.2vw, 3rem)",
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "clamp(1.5rem, 1.05rem + 1.6vw, 2.25rem)",
    fontWeight: 400,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: "clamp(1.35rem, 1rem + 1.1vw, 1.75rem)",
    lineHeight: 1.3,
  },
  h4: {
    fontSize: "clamp(1.125rem, 0.92rem + 0.55vw, 1.5rem)",
    fontWeight: 400,
    lineHeight: 1.35,
  },
  h5: {
    fontSize: "clamp(1rem, 0.88rem + 0.35vw, 1.25rem)",
    fontWeight: 400,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: "clamp(0.9375rem, 0.86rem + 0.2vw, 1.125rem)",
    fontWeight: 400,
    lineHeight: 1.4,
  },
  htmlFontSize: 16,
} as const;

function buildPalette(mode: PaletteMode) {
  if (mode === "dark") {
    return {
      mode: "dark" as const,
      primary: {
        light: "#9ec0ff",
        main: "#6ba3f7",
        dark: "#3d7ad9",
        contrastText: "#0a0e14",
      },
      secondary: {
        main: "#3d4a5c",
        contrastText: "#e8eef5",
      },
      error: {
        main: red.A400,
      },
      grey: {
        50: "#8896ab",
        100: "#222a38",
        200: "#5c6b80",
        300: "#b4c2d6",
      },
      background: {
        default: "#0f1419",
        paper: "#171e29",
      },
      text: {
        primary: "#e8eef5",
        secondary: "#9aadbf",
      },
      divider: "rgba(255, 255, 255, 0.09)",
    };
  }

  return {
    mode: "light" as const,
    error: {
      main: red.A400,
    },
    grey: {
      100: "#F8F8F8",
      200: "#6C757D",
      300: "#54595E",
      50: "#bdbdbd",
    },
    primary: {
      light: "#85B3F6",
      main: "#3785F7",
      dark: "#2563c4",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#E9E9E9",
      contrastText: "#1a1a1a",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
    },
    divider: "rgba(0, 0, 0, 0.08)",
  };
}

export function createAppTheme(mode: PaletteMode): Theme {
  const base = createTheme({
    palette: buildPalette(mode),
    typography: sharedTypography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            WebkitTextSizeAdjust: "100%",
          },
        },
      },
    },
  });

  return createTheme(base, {
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: base.spacing(PAGE_GUTTER_XS),
            paddingRight: base.spacing(PAGE_GUTTER_XS),
            [base.breakpoints.up("md")]: {
              paddingLeft: base.spacing(PAGE_GUTTER_MD),
              paddingRight: base.spacing(PAGE_GUTTER_MD),
            },
            [base.breakpoints.up("lg")]: {
              paddingLeft: base.spacing(PAGE_GUTTER_LG),
              paddingRight: base.spacing(PAGE_GUTTER_LG),
            },
          },
        },
      },
    },
  });
}

export const lightTheme = createAppTheme("light");

export default lightTheme;
