import type { SxProps, Theme } from "@mui/material";
import flexContainer from "@/src/mixins/flexContainer";

export function getGreyBoxSx(theme: Theme): SxProps<Theme> {
  return {
    ...flexContainer(),
    ":hover": {
      background: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
    alignItems: "center",
    background: theme.palette.grey[100],
    borderRadius: "12px",
    color: theme.palette.grey[300],
    cursor: "pointer",
    padding: theme.spacing(8),
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },
  };
}
