import type { Theme } from "@mui/material/styles";

export function getLinkStyles(theme: Theme) {
  return {
    "&:hover": {
      background: theme.palette.primary.dark,
      borderRadius: "5px",
      color: theme.palette.primary.contrastText,
    },
    color: theme.palette.text.primary,
    height: "100%",
    padding: "0.5rem",
    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
    textDecoration: "none",
  };
}

export function getLinkActive(theme: Theme, currentPath: string, path: string) {
  return currentPath === path
    ? {
        background: theme.palette.primary.dark,
        borderRadius: "5px",
        color: theme.palette.primary.contrastText,
      }
    : {};
}
