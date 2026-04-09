import * as React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu, { MenuProps } from "@mui/material/Menu";
import { ArrowDropDown } from "@mui/icons-material";

import MenuItem from "@mui/material/MenuItem";
import { styled, Typography, useTheme } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { Pages } from "@/src/metaData";
import Link from "@/src/Link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getLinkActive, getLinkStyles } from "@/src/mixins/linkStyles";

function dropdownItemSx(theme: Theme, pathname: string, path: string) {
  return {
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.action.focus,
    },
    "&:hover": {
      background: theme.palette.primary.dark,
      borderRadius: "5px",
      color: theme.palette.primary.contrastText,
    },
    backgroundColor: "transparent",
    borderRadius: "5px",
    color: theme.palette.text.primary,
    display: "block",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.35,
    minHeight: 44,
    mx: 0.5,
    my: 0,
    px: 1.75,
    py: 1.125,
    textDecoration: "none",
    transition: theme.transitions.create(["background-color", "color"], {
      duration: theme.transitions.duration.shorter,
    }),
    ...getLinkActive(theme, pathname, path),
  };
}

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      horizontal: "left",
      vertical: "bottom",
    }}
    disableAutoFocusItem
    disableScrollLock
    transformOrigin={{
      horizontal: "left",
      vertical: "top",
    }}
    {...props}
    transitionDuration={180}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    "& .MuiDivider-root": {
      borderColor: theme.palette.divider,
      listStyle: "none",
      margin: theme.spacing(0, 1),
    },
    "& .MuiMenu-list": {
      padding: theme.spacing(0.75),
    },
    backgroundColor: theme.palette.background.paper,
    backgroundImage: "none",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: Number(theme.shape.borderRadius) + 4,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)"
        : "0 10px 38px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)",
    marginTop: theme.spacing(0.5),
    minWidth: 200,
    overflow: "hidden",
  },
}));

export default function OtherPagesMenu() {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation("common");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const kitosPath = Pages.KitosPrekes.fallBackPath;
  const monitoriaiPath = Pages.Monitoriai.fallBackPath;
  const isKitos = router.pathname === kitosPath;
  const isMonitoriai = router.pathname === monitoriaiPath;

  const triggerStyles = {
    ...getLinkStyles(theme),
    ...getLinkActive(theme, router.pathname, kitosPath),
    ...getLinkActive(theme, router.pathname, monitoriaiPath),
    minWidth: "unset",
    textTransform: "none" as const,
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        color="inherit"
        disableElevation
        endIcon={
          <ArrowDropDown
            sx={{
              color: "inherit",
              transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shorter,
              }),
              transform: open ? "rotate(-180deg)" : "rotate(0deg)",
            }}
          />
        }
        sx={triggerStyles}
        onMouseOver={handleClick}
      >
        <Typography component="span" fontSize={18} sx={{ color: "inherit" }}>
          {t("header_link_kitos_prekes")}
        </Typography>
      </Button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        elevation={0}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          autoFocus: false,
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem
          aria-current={isKitos ? "page" : undefined}
          component={Link}
          href={t("header_link_kitos_prekes_path")}
          locale={router.locale}
          prefetch={false}
          sx={dropdownItemSx(theme, router.pathname, kitosPath)}
          onClick={handleClose}
        >
          {t("header_link_kitos_prekes")}
        </MenuItem>
        <Divider component="li" sx={{ my: 0.5 }} />
        <MenuItem
          aria-current={isMonitoriai ? "page" : undefined}
          component={Link}
          href={t("header_link_monitoriai_path")}
          locale={router.locale}
          prefetch={false}
          sx={dropdownItemSx(theme, router.pathname, monitoriaiPath)}
          onClick={handleClose}
        >
          {t("header_link_monitoriai")}
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
