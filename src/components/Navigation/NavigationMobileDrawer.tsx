import styled from "@emotion/styled";
import { Drawer, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import Link from "@/src/Link";
import flexContainer from "@/src/mixins/flexContainer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LanguageToggler from "@/src/components/Navigation/LanguageToggle";
import {
  ApieMusPath,
  KitosPrekesPath,
  KontaktaiPath,
  MonitoriaiPath,
  NesiojamiPath,
  PagrindinisPath,
  RemontasPath,
  StacionarusPath,
  SupirkimasPath,
} from "@/src/components/Navigation/NavigationAppBar";

import { useTranslation } from "next-i18next";
import AddressBox from "@/src/components/Navigation/AddressBox";
import { Box, SxProps, Theme } from "@mui/system";
import { useRouter } from "next/router";
import { getLinkActive, getLinkStyles } from "@/src/mixins/linkStyles";

const styles = {
  drawer: {
    "& .MuiDrawer-paper": {
      gap: "2rem",
      overflowY: "auto",
      width: "100%",
    },
    height: "100vh",
    overflow: "scroll",
  },
  languageToggler: {
    left: "1rem",
    minHeight: 32,
  },
};

const DrawerRow = styled("div")({
  ...flexContainer("center", undefined, "row", "center"),
});

const MobileDrawerRow = ({ href, sx, linkName }: { href: string; linkName: string; sx: SxProps<Theme> }) => {
  const theme = useTheme();

  return (
    <DrawerRow>
      <Link href={href} prefetch={false} sx={{ ...getLinkStyles(theme), ...sx }}>
        <Typography fontSize={18}>{linkName}</Typography>
      </Link>
    </DrawerRow>
  );
};

const NavigationMobileDrawer = ({
  toggleDrawer,
  open,
}: {
  // eslint-disable-next-line no-unused-vars
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
  open: boolean;
}) => {
  const theme = useTheme();
  const { drawer } = styles;

  const { t } = useTranslation("common");

  const { pathname } = useRouter();

  const pagrindinisPath = t("header_link_pagrindinis_path") ?? PagrindinisPath;
  const nesiojamiPath = t("header_link_nesiojami_path") ?? NesiojamiPath;
  const stacionarusPath = t("header_link_stacionarus_path") ?? StacionarusPath;
  const remontasPath = t("header_link_remontas_path") ?? RemontasPath;
  const kontaktaiPath = t("header_link_kontaktai_path") ?? KontaktaiPath;
  const apiemusPath = t("header_link_apie_mus_path") ?? ApieMusPath;
  const monitoriaiPath = t("header_link_monitoriai_path") ?? MonitoriaiPath;
  const supirkimasPath = t("header_link_supirkimas_path") ?? SupirkimasPath;
  const kitosPrekesPath = t("header_link_kitos_prekes_path") ?? KitosPrekesPath;

  return (
    <Drawer anchor={"left"} open={open} onClose={toggleDrawer} sx={{ ...drawer }} transitionDuration={100}>
      <Box display={"flex"} justifyContent={"space-between"} position={"relative"} minHeight={"56px"}>
        <LanguageToggler />
        <IconButton onClick={toggleDrawer} aria-label="drawer close" sx={{ paddingRight: "1rem" }}>
          <MenuOpenIcon sx={{ color: "text.primary", fontSize: "2rem" }} />
        </IconButton>
      </Box>

      <MobileDrawerRow
        href={pagrindinisPath}
        linkName={t("header_link_pagrindins")}
        sx={getLinkActive(theme, pathname, pagrindinisPath)}
      />

      <MobileDrawerRow
        href={nesiojamiPath}
        linkName={t("header_link_nesiojami")}
        sx={getLinkActive(theme, pathname, nesiojamiPath)}
      />

      <MobileDrawerRow
        href={stacionarusPath}
        linkName={t("header_link_stacionarus")}
        sx={getLinkActive(theme, pathname, stacionarusPath)}
      />

      <MobileDrawerRow
        href={kitosPrekesPath}
        linkName={t("header_link_kitos_prekes")}
        sx={getLinkActive(theme, pathname, kitosPrekesPath)}
      />

      <MobileDrawerRow
        href={monitoriaiPath}
        linkName={t("header_link_monitoriai")}
        sx={getLinkActive(theme, pathname, monitoriaiPath)}
      />

      <MobileDrawerRow
        href={remontasPath}
        linkName={t("header_link_remontas")}
        sx={getLinkActive(theme, pathname, remontasPath)}
      />

      <MobileDrawerRow
        href={supirkimasPath}
        linkName={t("header_link_supirkimas")}
        sx={getLinkActive(theme, pathname, supirkimasPath)}
      />

      <MobileDrawerRow href={apiemusPath} linkName={t("header_link_apie_mus")} sx={getLinkActive(theme, pathname, apiemusPath)} />

      <MobileDrawerRow
        href={kontaktaiPath}
        linkName={t("header_link_kontaktai")}
        sx={getLinkActive(theme, pathname, kontaktaiPath)}
      />
      <AddressBox sx={{ display: "flex", flexDirection: "column" }} isMobile />
    </Drawer>
  );
};

export default NavigationMobileDrawer;
