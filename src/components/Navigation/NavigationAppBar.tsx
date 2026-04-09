import { AppBar, Box, Container, Grid, styled, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";

import Link from "@/src/Link";
import { Pages } from "@/src/metaData";
import { getLinkActive, getLinkStyles } from "@/src/mixins/linkStyles";

import OtherPagesMenu from "@/src/components/Navigation/OtherPagesMenu";
import { KompservisasLogo } from "@/src/components/elements/KompservisasLogo";
import LanguageToggle from "@/src/components/Navigation/LanguageToggle";
import ColorModeToggle from "@/src/components/Navigation/ColorModeToggle";
import { useTranslation } from "next-i18next";

import MobileNavigation from "@/src/components/Navigation/MobileNavigation";
import AddressBox from "@/src/components/Navigation/AddressBox";

export const {
  Pagrindinis: { fallBackPath: PagrindinisPath },
  Nesiojami: { fallBackPath: NesiojamiPath },
  Stacionarus: { fallBackPath: StacionarusPath },
  Supirkimas: { fallBackPath: SupirkimasPath },
  Remontas: { fallBackPath: RemontasPath },
  Kontaktai: { fallBackPath: KontaktaiPath },
  KitosPrekes: { fallBackPath: KitosPrekesPath },
  Monitoriai: { fallBackPath: MonitoriaiPath },
  ApieMus: { fallBackPath: ApieMusPath },
} = Pages;

const StyledLink = styled(Link)(({ theme }) => ({
  ...getLinkStyles(theme),
}));

const NavigationAppBar = () => {
  const theme = useTheme();
  const { pathname, locale } = useRouter();

  const { t } = useTranslation("common");
  const nesiojamiPath = t("header_link_nesiojami_path") ?? NesiojamiPath;
  const stacionarusPath = t("header_link_stacionarus_path") ?? StacionarusPath;
  const remontasPath = t("header_link_remontas_path") ?? RemontasPath;
  const kontaktaiPath = t("header_link_kontaktai_path") ?? KontaktaiPath;

  return (
    <>
      <AppBar
        position={"sticky"}
        color="inherit"
        elevation={0}
        sx={{
          backgroundColor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
          boxShadow: (t) =>
            t.palette.mode === "dark" ? "0 4px 24px rgba(0,0,0,0.35)" : "0 4px 30px 0 rgb(0 0 0 / 10%)",
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            direction={"column"}
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"space-between"}
              alignContent={"center"}
              alignItems={"center"}
              minHeight={"61px"}
              borderBottom={1}
              borderColor="divider"
            >
              <Link href={PagrindinisPath} sx={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    width: "200px",
                  }}
                >
                  <KompservisasLogo />
                </div>
              </Link>
              <StyledLink
                href={nesiojamiPath}
                prefetch={false}
                locale={locale}
                sx={{
                  ...getLinkActive(theme, pathname, nesiojamiPath),
                }}
              >
                <Typography fontSize={18}>{t("header_link_nesiojami")}</Typography>
              </StyledLink>
              <StyledLink
                href={stacionarusPath}
                prefetch={false}
                locale={locale}
                sx={{
                  ...getLinkActive(theme, pathname, stacionarusPath),
                }}
              >
                <Typography fontSize={18}>{t("header_link_stacionarus")}</Typography>
              </StyledLink>
              <OtherPagesMenu />
              <StyledLink
                href={remontasPath}
                prefetch={false}
                locale={locale}
                sx={{
                  ...getLinkActive(theme, pathname, remontasPath),
                }}
              >
                <Typography fontSize={18}>{t("header_link_remontas")}</Typography>
              </StyledLink>
              <StyledLink
                href={kontaktaiPath}
                prefetch={false}
                locale={locale}
                sx={{
                  ...getLinkActive(theme, pathname, kontaktaiPath),
                }}
              >
                <Typography fontSize={18}>{t("header_link_kontaktai")}</Typography>
              </StyledLink>
              <Box alignItems="center" display="flex" gap={0.5}>
                <LanguageToggle />
                <ColorModeToggle />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction={"row"}
              justifyContent={"space-between"}
              paddingBottom={"1rem"}
              paddingTop={"1rem"}
            >
              <Box
                alignItems={"center"}
                alignContent={"center"}
                display={"flex"}
                sx={{
                  "> a": {
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    color: theme.palette.primary.main,
                    fontWeight: "bold",
                    textDecoration: "none",
                  },
                }}
              >
                <Typography sx={{ color: "text.primary" }}>{t("header_call_us")}&nbsp;</Typography>
                <a href="tel:+370 699 69578">+370 699 69578,</a>
                &nbsp;
                <a href="tel:+370 699 62246">+370 699 62246</a>
              </Box>
              <AddressBox
                sx={{
                  backgroundColor: "background.paper",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <MobileNavigation />
    </>
  );
};

export default NavigationAppBar;
