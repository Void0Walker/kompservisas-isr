import { AppBar, Box, IconButton, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import { KompservisasLogo } from "@/src/components/elements/KompservisasLogo";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import ColorModeToggle from "@/src/components/Navigation/ColorModeToggle";

const NavigationMobileDrawer = dynamic(() => import("./NavigationMobileDrawer"));

const MobileNavigation: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        position={"static"}
        color="inherit"
        elevation={0}
        sx={{
          backgroundColor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
          boxShadow: (t) =>
            t.palette.mode === "dark" ? "0 4px 24px rgba(0,0,0,0.35)" : "0 4px 30px 0 rgb(0 0 0 / 10%)",
          color: "text.primary",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            paddingLeft: "1rem",
            width: "220px",
          }}
        >
          <KompservisasLogo />
        </div>
        <Box alignItems="center" display="flex">
          <ColorModeToggle />
          <IconButton onClick={toggleDrawer} aria-label="drawer open" sx={{ paddingRight: "1rem" }}>
            <Menu sx={{ color: "text.primary", fontSize: "2rem" }} />
          </IconButton>
        </Box>
        {open ? <NavigationMobileDrawer toggleDrawer={toggleDrawer} open={open} /> : null}
      </AppBar>
    </>
  );
};

export default MobileNavigation;
