import React from "react";

import { Box, styled } from "@mui/system";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

import {
  NesiojamiPath,
  StacionarusPath,
  RemontasPath,
  KontaktaiPath,
  ApieMusPath,
} from "@/src/components/Navigation/NavigationAppBar";
import Link from "@/src/Link";
import { useRouter } from "next/router";
import InfoIcon from "@mui/icons-material/Info";
import { DesktopMacOutlined, LaptopOutlined } from "@mui/icons-material";

const FooterContainer = styled("footer")(({ theme }) => ({
  background: theme.palette.primary.dark,
  minHeight: "300px",
  paddingBottom: theme.spacing(6),
  paddingTop: theme.spacing(6),
  width: "100%",
}));

const StyledFooterLink = styled(Link)({
  color: "inherit",
  display: "inline-flex",
  gap: "1rem",
  maxWidth: "fit-content",
  textDecoration: "underline",
});

const Footer: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { locale } = useRouter();
  const nesiojamiPath = t("header_link_nesiojami_path") ?? NesiojamiPath;
  const stacionarusPath = t("header_link_stacionarus_path") ?? StacionarusPath;
  const remontasPath = t("header_link_remontas_path") ?? RemontasPath;
  const kontaktaiPath = t("header_link_kontaktai_path") ?? KontaktaiPath;
  const apiemusPath = t("header_link_apie_mus_path") ?? ApieMusPath;
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerStyles = {
    [theme.breakpoints.down("md")]: {
      "& > *:not(:last-child)": {
        display: "none",
      },
    },
  };

  const footerLinkColor = theme.palette.getContrastText(theme.palette.primary.dark);

  return (
    <FooterContainer>
      <Container
        maxWidth="xl"
        sx={{
          ...containerStyles,
        }}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={"1fr 0.8fr 1.2fr 1fr"}
          sx={{
            color: footerLinkColor,
            [theme.breakpoints.down("lg")]: {
              gridTemplateColumns: "1fr 1fr 1fr",
            },
            [theme.breakpoints.down("md")]: {
              gridTemplateColumns: "1fr",
            },
          }}
          gap={"3rem"}
        >
          <Box
            display={"flex"}
            alignContent={"center"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"2rem"}>
              <Box>
                <Image src="/kompservisas-circle.png" alt="Kompservisas logo white" width={80} height={80} />
              </Box>
              <Typography fontSize={"1rem"}>
                <Trans i18nKey={"footer_text_moto"} ns="common">
                  <strong>KOMPSERVISAS </strong> - jūsų patikimas naudotų verslo klasės kompiuterių pardavimo ir remonto
                  partneris.
                </Trans>
              </Typography>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
            sx={{
              mt: "3rem",
              [theme.breakpoints.down("md")]: {
                mt: "unset",
              },
            }}
          >
            <Typography fontSize={"1rem"}>{t("footer_text_general_information").toUpperCase()}</Typography>

            <StyledFooterLink href={apiemusPath} prefetch={false} locale={locale} sx={{ color: footerLinkColor }}>
              <InfoIcon />
              <Typography fontSize={"1rem"}>{t("footer_link_about_us")}</Typography>
            </StyledFooterLink>

            <StyledFooterLink href={apiemusPath} prefetch={false} locale={locale} sx={{ color: footerLinkColor }}>
              <BusinessIcon />
              <Typography fontSize={"1rem"}>{t("footer_link_co-operation")}</Typography>
            </StyledFooterLink>

            <StyledFooterLink href={kontaktaiPath} prefetch={false} locale={locale} sx={{ color: footerLinkColor }}>
              <CallIcon />
              <Typography fontSize={"1rem"}>{t("header_link_kontaktai")}</Typography>
            </StyledFooterLink>
            <a
              style={{ color: footerLinkColor }}
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Kompservisas/@54.67485,25.272171,17z/data=!3m1!4b1!4m6!3m5!1s0x46dd946c477db3dd:0xd0af6ea856bb942!8m2!3d54.67485!4d25.272171!16s%2Fg%2F11c59x86kj?entry=ttu"
            >
              Algirdo g. 32 / Šaltinių g. 2, Vilnius{" "}
            </a>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
            sx={{
              mt: "3rem",
              [theme.breakpoints.down("md")]: {
                mt: "unset",
              },
            }}
          >
            <Typography fontSize={"1rem"}>{t("footer_text_services").toUpperCase()}</Typography>

            <StyledFooterLink href={remontasPath} prefetch={false} locale={locale} sx={{ color: footerLinkColor }}>
              <BuildCircleIcon />
              <Typography fontSize={"1rem"}>{t("footer_text_kompiuteriu_remontas")}</Typography>
            </StyledFooterLink>

            <StyledFooterLink href={"/"} prefetch={false} locale={locale} sx={{ color: footerLinkColor }}>
              <LoyaltyIcon />
              <Typography fontSize={"1rem"}>{t("footer_text_used_computers")}</Typography>
            </StyledFooterLink>

            <StyledFooterLink href={nesiojamiPath} prefetch={false} locale={locale} sx={{ color: footerLinkColor }}>
              <LaptopOutlined />
              <Typography fontSize={"1rem"}>{t("footer_text_used_laptops")}</Typography>
            </StyledFooterLink>

            <StyledFooterLink href={stacionarusPath} prefetch={false} locale={locale} sx={{ color: footerLinkColor }}>
              <DesktopMacOutlined />
              <Typography fontSize={"1rem"}>{t("footer_text_used_desktops")}</Typography>
            </StyledFooterLink>
          </Box>

          <Box
            style={{
              height: 0,
              overflow: "hidden",
              paddingBottom: "80%",
              position: "relative",
            }}
          >
            <Typography fontSize={"1rem"}>{"PASLAUGOS".toUpperCase()}</Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.976042014423!2d25.272171!3d54.67485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd946c477db3dd%3A0xd0af6ea856bb942!2sKompservisas!5e0!3m2!1sen!2scz!4v1703064116664!5m2!1sen!2scz&zoom=50"
              style={{
                border: 0,
                borderRadius: 8,
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          {isMobile && (
            <Typography sx={{ color: footerLinkColor, mt: "2rem", textAlign: "center", width: "100%" }}>
              {t("footer_text_all_rights_reserved", { year: new Date().getFullYear() })}
            </Typography>
          )}
        </Box>
        {!isMobile && (
          <Typography sx={{ color: footerLinkColor, width: "100%", textAlign: "center", mt: "2rem" }}>
            {t("footer_text_all_rights_reserved", { year: new Date().getFullYear() })}
          </Typography>
        )}
      </Container>
    </FooterContainer>
  );
};

export default Footer;
