import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { useTranslation } from "next-i18next";
import * as React from "react";

import { useColorMode } from "@/src/colorMode/ColorModeContext";

const ColorModeToggle: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");
  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? t("color_mode_switch_to_light") : t("color_mode_switch_to_dark")}>
      <IconButton
        aria-label={isDark ? t("color_mode_switch_to_light") : t("color_mode_switch_to_dark")}
        color="inherit"
        edge="end"
        onClick={toggleColorMode}
        size="small"
      >
        {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ColorModeToggle;
