import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React, { useMemo } from "react";
import { useGetRecommendedProductsQuery } from "@/api/graphql-hooks";
import MainLayout from "@/src/components/Layout";
import { Pages } from "@/src/metaData";
import { getGreyBoxSx } from "@/src/mixins/greyBox";
import { useRouter } from "next/router";
import DisappearingSpan from "@/src/components/elements/DisappearingSpan";
import { createPagrindinisStyles, Styled } from "@/src/pages/Pagrindinis/pagrindinisStyles";
import preparePagrindinisData from "@/src/pages/Pagrindinis/pagrindinisData";
import { useTranslation, Trans } from "next-i18next";
import Link from "@/src/Link";
import ProductCard from "@/src/components/ProductCard";
import { createCloudinaryImageUrl, createCloudinarySrcSet } from "@/src/helpers/utils";

const HERO_IMAGE_BASE_URL =
  "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1642270949/kompservisas-landing-page/original.webp";

const HERO_IMAGE_SRC = createCloudinaryImageUrl(HERO_IMAGE_BASE_URL, "f_auto,q_auto,w_640");

const HERO_IMAGE_SRC_SET = createCloudinarySrcSet(HERO_IMAGE_BASE_URL, [320, 480, 640, 900, 1200]);

const CATALOGUE_IMAGE_SIZES = "(max-width: 600px) 120px, (max-width: 900px) 160px, 220px";

const LENOVO_L480_IMAGE_BASE_URL =
  "https://res.cloudinary.com/kalandarisvili-dev/image/upload/z_1/v1642615146/kompservisas-landing-page/Lenovo-L480.webp";

const DELL_TOWERS_IMAGE_BASE_URL =
  "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1647204074/kompservisas-landing-page/Dell-towers-optimised.webp";

const LENOVO_L480_IMAGE_SRC = createCloudinaryImageUrl(LENOVO_L480_IMAGE_BASE_URL, "f_auto,q_auto,w_320");
const DELL_TOWERS_IMAGE_SRC = createCloudinaryImageUrl(DELL_TOWERS_IMAGE_BASE_URL, "f_auto,q_auto,w_320");

const LENOVO_L480_IMAGE_SRC_SET = createCloudinarySrcSet(LENOVO_L480_IMAGE_BASE_URL, [160, 240, 320, 480, 600]);
const DELL_TOWERS_IMAGE_SRC_SET = createCloudinarySrcSet(DELL_TOWERS_IMAGE_BASE_URL, [160, 240, 320, 480, 600]);

const HOME_SECTION_IMAGE_SIZES = "(max-width: 900px) 0px, 252px";
const HOME_SECTION_IMAGE_WIDTH_SET = [300, 450, 600, 750];

const ABOUT_US_IMAGE_BASE_URL =
  "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1703329685/kompservisas-landing-page/slick-stack-nobg.webp";
const PREPARATION_IMAGE_BASE_URL =
  "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1703418182/kompservisas-landing-page/preparation.png";
const WARRANTY_IMAGE_BASE_URL =
  "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1703419173/kompservisas-landing-page/warrant-no-bg.png";
const BUSINESS_IMAGE_BASE_URL =
  "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1703420077/kompservisas-landing-page/handshake.png";

const ABOUT_US_IMAGE_SRC = createCloudinaryImageUrl(ABOUT_US_IMAGE_BASE_URL, "f_auto,q_auto,w_600");
const PREPARATION_IMAGE_SRC = createCloudinaryImageUrl(PREPARATION_IMAGE_BASE_URL, "f_auto,q_auto,w_600");
const WARRANTY_IMAGE_SRC = createCloudinaryImageUrl(WARRANTY_IMAGE_BASE_URL, "f_auto,q_auto,w_600");
const BUSINESS_IMAGE_SRC = createCloudinaryImageUrl(BUSINESS_IMAGE_BASE_URL, "f_auto,q_auto,w_600");

const ABOUT_US_IMAGE_SRC_SET = createCloudinarySrcSet(ABOUT_US_IMAGE_BASE_URL, HOME_SECTION_IMAGE_WIDTH_SET);
const PREPARATION_IMAGE_SRC_SET = createCloudinarySrcSet(PREPARATION_IMAGE_BASE_URL, HOME_SECTION_IMAGE_WIDTH_SET);
const WARRANTY_IMAGE_SRC_SET = createCloudinarySrcSet(WARRANTY_IMAGE_BASE_URL, HOME_SECTION_IMAGE_WIDTH_SET);
const BUSINESS_IMAGE_SRC_SET = createCloudinarySrcSet(BUSINESS_IMAGE_BASE_URL, HOME_SECTION_IMAGE_WIDTH_SET);

const HERO_IMAGE_SIZES = "(max-width: 600px) 45vw, (max-width: 900px) 50vw, 420px";

const StyledBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  borderRadius: "12px",
  color: theme.palette.grey[300],
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(6),
  justifyContent: "space-between",
  padding: theme.spacing(6),
}));

const ReliabilityBox = () => {
  const { t } = useTranslation(["pagrindinis", "common"]);
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: theme.spacing(6),
      }}
    >
      <Typography
        fontSize={"2rem"}
        fontFamily={"var(--font-nunito, Nunito)"}
        fontWeight={200}
        color="text.primary"
        variant="h2"
        lineHeight={"3rem"}
        sx={{
          [theme.breakpoints.down("xl")]: {
            fontSize: "1.8rem",
          },
        }}
      >
        {t("section2_paragraph_reliability")}
      </Typography>

      <Typography
        fontWeight={400}
        sx={{
          color: theme.palette.primary.main,
          fontSize: "1.4rem",
          mt: "1rem",
        }}
      >
        <a href="tel:+37069969578" style={{ all: "unset", cursor: "pointer" }}>
          +370 699 69578
        </a>
        ,
        <a href="tel:+37069962246" style={{ all: "unset", cursor: "pointer" }}>
          +370 699 62246
        </a>
      </Typography>
    </Box>
  );
};

const AboutUsBox = () => {
  const { t } = useTranslation(["pagrindinis", "common"]);
  const theme = useTheme();

  return (
    <StyledBox sx={{ paddingTop: theme.spacing(12) }}>
      <Box
        component="img"
        sx={{
          height: 252,
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
        alt="stacked laptops"
        decoding="async"
        loading="lazy"
        sizes={HOME_SECTION_IMAGE_SIZES}
        src={ABOUT_US_IMAGE_SRC}
        srcSet={ABOUT_US_IMAGE_SRC_SET}
      />
      <Typography
        fontSize={"2rem"}
        fontFamily={"var(--font-nunito, Nunito)"}
        fontWeight={200}
        color="text.primary"
        lineHeight={"3rem"}
        sx={{
          [theme.breakpoints.down("xl")]: {
            fontSize: "1.8rem",
          },
        }}
      >
        <Trans i18nKey={"section3_about_us"} ns="pagrindinis">
          Kompservisas - tai patikimų ir kruopščiai paruoštų naudotų kompiuterių parduotuvė Vilniuje. Siūlome tik
          kokybiškus, profesionaliai patikrintus ir paruoštus įrenginius darbui ir pramogoms. Taip pat teikiame
          <Link
            href={t("common:header_link_remontas_path") ?? Pages.Remontas.fallBackPath}
            prefetch={false}
            sx={{ fontWeight: "bold" }}
          >
            kompiuterių remonto
          </Link>
          Vilniuje paslaugas.
        </Trans>
      </Typography>
    </StyledBox>
  );
};

const PreparationBox = () => {
  const theme = useTheme();

  return (
    <StyledBox>
      <Typography
        fontSize={"2rem"}
        fontFamily={"var(--font-nunito, Nunito)"}
        fontWeight={200}
        color="text.primary"
        lineHeight={"3rem"}
        sx={{
          [theme.breakpoints.down("xl")]: {
            fontSize: "1.8rem",
          },
        }}
      >
        <Trans i18nKey={"section4_preparation"} ns="pagrindinis">
          <strong>Paruošimas</strong>. Kiekvieną kompiuterį prieš parduodant patikriname spec. įranga, atliekamas
          valymas, atnaujinama programinė įranga. Tokiu būdu užtikriname, kad kiekvienas įrenginys veiktų efektyviai ir
          būtų patikimas ilgą laiką.
        </Trans>
      </Typography>
      <Box
        component="img"
        sx={{
          height: 252,
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
        alt="DELL towers"
        decoding="async"
        loading="lazy"
        sizes={HOME_SECTION_IMAGE_SIZES}
        src={PREPARATION_IMAGE_SRC}
        srcSet={PREPARATION_IMAGE_SRC_SET}
      />
    </StyledBox>
  );
};

const WarrantyBox = () => {
  const theme = useTheme();

  return (
    <StyledBox sx={{ paddingTop: "unset" }}>
      <Box
        component="img"
        sx={{
          height: 252,
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
        alt="DELL towers"
        decoding="async"
        loading="lazy"
        sizes={HOME_SECTION_IMAGE_SIZES}
        src={WARRANTY_IMAGE_SRC}
        srcSet={WARRANTY_IMAGE_SRC_SET}
      />
      <Typography
        fontSize={"2rem"}
        fontFamily={"var(--font-nunito, Nunito)"}
        fontWeight={200}
        color="text.primary"
        lineHeight={"3rem"}
        sx={{
          [theme.breakpoints.down("xl")]: {
            fontSize: "1.8rem",
          },
        }}
      >
        <Trans i18nKey={"section5_warranty"} ns="pagrindinis">
          <strong>Garantija</strong>. Visiems parduodamiems kompiuteriams suteikiama 1 metų garantija.
        </Trans>
      </Typography>
    </StyledBox>
  );
};

const BusinessBox = () => {
  const theme = useTheme();

  return (
    <StyledBox sx={{ paddingTop: "unset" }}>
      <Typography
        fontSize={"2rem"}
        fontFamily={"var(--font-nunito, Nunito)"}
        fontWeight={200}
        color="text.primary"
        lineHeight={"3rem"}
        sx={{
          [theme.breakpoints.down("xl")]: {
            fontSize: "1.8rem",
          },
        }}
      >
        <Trans i18nKey={"section6_business_clients"} ns="pagrindinis">
          <strong>Verslo klientams</strong>. Mūsų pasiūla yra idealus pasirinkimas įmonėms ir organizacijoms,
          ieškančioms patikimų naudotų kompiuterių didesniais kiekiais. Siūlome konkurencingas kainas ir specialius
          pasiūlymus verslui, atsižvelgdami į jūsų specifinius poreikius.
        </Trans>
      </Typography>
      <Box
        component="img"
        sx={{
          height: 252,
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
        alt="DELL towers"
        decoding="async"
        loading="lazy"
        sizes={HOME_SECTION_IMAGE_SIZES}
        src={BUSINESS_IMAGE_SRC}
        srcSet={BUSINESS_IMAGE_SRC_SET}
      />
    </StyledBox>
  );
};

const Pagrindinis: React.FC = () => {
  const theme = useTheme();
  const recommendedProductsData = useGetRecommendedProductsQuery();
  const router = useRouter();
  const recommendedProducts = preparePagrindinisData(recommendedProductsData.data?.recommendedProducts);

  const { t } = useTranslation(["pagrindinis", "common"]);

  const styles = useMemo(() => createPagrindinisStyles(theme), [theme]);
  const greyBoxSx = useMemo(() => getGreyBoxSx(theme), [theme]);

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isPhone = useMediaQuery(theme.breakpoints.down("md"));

  const redirectToLaptops = () => router.push(t("common:header_link_nesiojami_path") ?? Pages.Nesiojami.fallBackPath);
  const redirectToDesktops = () =>
    router.push(t("common:header_link_stacionarus_path") ?? Pages.Stacionarus.fallBackPath);

  return (
    <MainLayout pageName={Pages.Pagrindinis.name}>
      <Box sx={styles.layoutContainerStyles}>
        <Styled.MainBoxTextContainer>
          <Typography
            variant="h1"
            fontWeight={400}
            sx={{
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: { md: "60%", xs: "100%" },
              textWrap: "balance",
            }}
          >
            {t("section1_title")}
          </Typography>
          <Button sx={styles.buyButtonStyles} variant="outlined" onClick={redirectToLaptops}>
            {t("section2_paragraph_button")}
          </Button>
        </Styled.MainBoxTextContainer>
        <Box
          component="img"
          sx={styles.lenovoE485Styles}
          alt="Lenovo E485"
          decoding="async"
          fetchPriority="high"
          loading="eager"
          sizes={HERO_IMAGE_SIZES}
          src={HERO_IMAGE_SRC}
          srcSet={HERO_IMAGE_SRC_SET}
        />
      </Box>
      <Grid container>
        {!isMobile && (
          <Grid item xs={12} sm={12} lg={4}>
            <ReliabilityBox />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingLeft: { lg: theme.spacing(4) },
            [theme.breakpoints.down("lg")]: {
              gap: theme.spacing(4),
              paddingLeft: 0,
            },
          }}
        >
          <Box
            onClick={redirectToLaptops}
            sx={{
              ...greyBoxSx,
            }}
          >
            <Typography
              fontWeight={300}
              sx={{ fontSize: "clamp(1.35rem, 1rem + 2vw, 2.25rem)" }}
            >
              <Trans i18nKey="section2_catalogue_button_laptops" ns="pagrindinis">
                Nešiojami <DisappearingSpan>kompiuteriai</DisappearingSpan>
              </Trans>
            </Typography>
            <Box
              component="img"
              sx={styles.lenovoL480Styles}
              alt="Lenovo L480"
              decoding="async"
              loading="lazy"
              sizes={CATALOGUE_IMAGE_SIZES}
              src={LENOVO_L480_IMAGE_SRC}
              srcSet={LENOVO_L480_IMAGE_SRC_SET}
            />
          </Box>
          <Box
            onClick={redirectToDesktops}
            sx={{
              ...greyBoxSx,
              marginTop: theme.spacing(6),
              [theme.breakpoints.down("lg")]: {
                marginTop: 0,
              },
            }}
          >
            <Typography
              fontWeight={300}
              sx={{ alignSelf: "center", fontSize: "clamp(1.35rem, 1rem + 2vw, 2.25rem)" }}
            >
              <Trans i18nKey="section2_catalogue_button_desktops" ns="pagrindinis">
                Stacionarūs <DisappearingSpan>kompiuteriai</DisappearingSpan>
              </Trans>
            </Typography>
            <Box
              component="img"
              sx={styles.dellTowersStyles}
              alt="DELL towers"
              decoding="async"
              loading="lazy"
              sizes={CATALOGUE_IMAGE_SIZES}
              src={DELL_TOWERS_IMAGE_SRC}
              srcSet={DELL_TOWERS_IMAGE_SRC_SET}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item direction={"row"} display={"flex"} gap={theme.spacing(6)} alignItems={"center"}>
          {!isPhone && <AboutUsBox />}
        </Grid>
        <Grid item direction={"row"} display={"flex"} gap={theme.spacing(6)} alignItems={"center"}>
          {!isPhone && <PreparationBox />}
        </Grid>
        <Grid item direction={"row"} display={"flex"} gap={theme.spacing(6)} alignItems={"center"}>
          {!isPhone && <WarrantyBox />}
        </Grid>
        <Grid item direction={"row"} display={"flex"} gap={theme.spacing(6)} alignItems={"center"}>
          {!isPhone && <BusinessBox />}
        </Grid>
      </Grid>

      <Box sx={{ marginTop: theme.spacing(4) }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "clamp(1.5rem, 1.1rem + 1.5vw, 2.25rem)",
            [theme.breakpoints.down("sm")]: {
              color: theme.palette.grey["300"],
            },
          }}
        >
          {t("section4_catalogue_button_recommended")}
        </Typography>
      </Box>

      <Styled.RecommendedContainer>
        {recommendedProducts?.map((product, index) => (
          <ProductCard
            product={product.cartItem}
            key={index}
            onClick={() => router.push(product.cartItem?.cartItemLink ?? "/")}
            isRecommendedCard
            isLcpCandidate={index === 0}
          />
        ))}
      </Styled.RecommendedContainer>
    </MainLayout>
  );
};

export default Pagrindinis;
