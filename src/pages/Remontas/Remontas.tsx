import {
  Badge,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useGetRepairsListQuery } from "@/api/graphql-hooks";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import { LayoutNoContainer } from "@/src/components/Layout";
import { Pages } from "@/src/metaData";
import RemontasTable, { RemontasData } from "@/src/pages/Remontas/RemontoKainorastisList";
import Resources from "@/@types/resources";
import { useTranslation } from "next-i18next";
import { Backup, Build, Coronavirus, Forum, InstallDesktop, Sell, SystemUpdateAlt } from "@mui/icons-material";
import useScrollToHash from "@/src/hooks/useScrollToHash";
import RemontoProcesas from "@/src/pages/Remontas/RemontoProcesas";
import Image from "next/image";
import RemontasReviewCard, { ReviewCardData } from "@/src/pages/Remontas/RemontasReviewCard";
import React from "react";
import HandymanIcon from "@mui/icons-material/Handyman";
import RemontasStyles from "@/src/pages/Remontas/remontasStyles";

const {
  HeroWithOverlay,
  ImageContainer,
  RemontasStyledImage: StyledImage,
  RemontasContainer,
  FAQSection,
  PhoneSection,
  RepairSection,
  ReviewCardSection,
  StyledFAQTittle,
  pageImages,
  RepairTableSection,
  BulletPointSection,
  AboutUsSection,
} = RemontasStyles;

const PhoneRow = () => {
  const theme = useTheme();
  const { t } = useTranslation(["remontas"]);

  const handleScrollToHash = useScrollToHash();

  return (
    <PhoneSection>
      <Typography variant="h1" color="white" fontWeight={400} sx={{ textWrap: "balance" }}>
        {t("static.section1_intro_title_repairs").toUpperCase()}
      </Typography>
      <Typography variant="h4" color="white" fontWeight={200} sx={{ textWrap: "balance" }}>
        {t("static.section1_intro_body_initial_inspection")}
      </Typography>
      <Typography
        variant="h5"
        fontWeight={400}
        sx={{
          color: theme.palette.primary.light,
        }}
      >
        <a
          href="tel:+37069969578"
          style={{ all: "unset", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "0.3rem" }}
        >
          +370 699 69578
        </a>
        {", "}
        <a
          href="tel:+37069962246"
          style={{ all: "unset", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "0.3rem" }}
        >
          +370 699 62246
        </a>
      </Typography>
      <Button
        size="large"
        variant="contained"
        endIcon={<Sell />}
        onClick={() => handleScrollToHash(t("static.section2_price_list_id"))}
      >
        {t("static.section1_intro_button_prices")}
      </Button>
    </PhoneSection>
  );
};

const RepairTableRow = ({ data }: { data: Array<RemontasData> }) => {
  const theme = useTheme();
  const { t } = useTranslation(["remontas"]);

  return (
    <RepairTableSection>
      <Typography variant="h4" id={t("static.section2_price_list_id")} fontWeight={400}>
        {t("static.section2_price_list_title_repair_price_list")}
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          marginTop: theme.spacing(4),
          mb: theme.spacing(0.5),
          [theme.breakpoints.down("sm")]: {
            mb: theme.spacing(2),
          },
        }}
      >
        {t("static.section2_price_list_info_preliminary_prices")}
      </Typography>
      <RemontasTable data={data} />
    </RepairTableSection>
  );
};

const ImageWrap = styled("span")(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  maxWidth: "100%",
  width: "100%",
  "& img, & span": {
    borderRadius: "0.625rem",
    maxWidth: "100%",
  },
}));

const BulletPointRow = () => {
  const theme = useTheme();
  const { t } = useTranslation(["remontas"]);

  const bulletPointData = [
    { text: t("static.section_repair_services_repair"), icon: <HandymanIcon /> },
    { text: t("static.section_repair_services_sales"), icon: <Sell /> },
    { text: t("static.section_repair_services_lcd_repair"), icon: <Build /> },
    { text: t("static.section_repair_services_software_installation"), icon: <InstallDesktop /> },
    { text: t("static.section_repair_services_data_backup"), icon: <Backup /> },
    { text: t("static.section_repair_services_external_components"), icon: <SystemUpdateAlt /> },
    { text: t("static.section_repair_services_virus_removal"), icon: <Coronavirus /> },
    { text: t("static.section_repair_services_consultation"), icon: <Forum /> },
  ];

  const {
    kompiuteriuRemontasMain: { src, alt },
  } = pageImages;

  return (
    <>
      <BulletPointSection>
        <div>
          <Typography sx={{ mb: theme.spacing(2) }} id={t("static.section2_price_list_id")} variant="h4">
            {t("static.section_repair_services_title")}
          </Typography>

          <List>
            {bulletPointData.map(({ text, icon }) => (
              <ListItem key={text}>
                <ListItemIcon sx={{ color: theme.palette.primary.main }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ variant: "body1", sx: { fontSize: "1.0625rem" } }}
                />
              </ListItem>
            ))}
          </List>
          <Typography
            sx={{
              mb: theme.spacing(2),
              paddingLeft: theme.spacing(2),
            }}
          >
            {t("static.section_repair_services_call_us").toUpperCase().replace(":", "")}
          </Typography>
          <Typography
            component="div"
            fontWeight={400}
            sx={{
              alignItems: "flex-start",
              color: theme.palette.primary.main,
              display: "flex",
              flexDirection: "column",
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              justifyContent: "flex-start",
              paddingLeft: theme.spacing(2),
              [theme.breakpoints.down("md")]: {
                mb: theme.spacing(2),
              },
            }}
          >
            <a href="tel:+37069969578" style={{ all: "unset", cursor: "pointer" }}>
              +370 699 69578
            </a>
            <a href="tel:+37069962246" style={{ all: "unset", cursor: "pointer" }}>
              +370 699 62246
            </a>
          </Typography>
        </div>
        <ImageWrap>
          <Image
            alt={alt}
            height={809}
            sizes="(max-width: 900px) 100vw, 50vw"
            src={src}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            width={1080}
          />
        </ImageWrap>
      </BulletPointSection>
    </>
  );
};

const RepairRow = () => {
  const theme = useTheme();
  const { t } = useTranslation(["remontas"]);

  const {
    kompiuteriuRemontasProcesas: { src, alt },
  } = pageImages;

  return (
    <>
      <Typography
        sx={{
          [theme.breakpoints.down("md")]: {
            mb: theme.spacing(4),
          },
        }}
        id={t("static.section2_price_list_id")}
        variant="h4"
      >
        {t("static.section3_repair_process_title_repair_process")}
      </Typography>
      <RepairSection>
        <ImageWrap>
          <Image
            alt={alt}
            height={720}
            sizes="(max-width: 900px) 100vw, 50vw"
            src={src}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            width={1080}
          />
        </ImageWrap>
        <RemontoProcesas />
      </RepairSection>
    </>
  );
};

const AboutUsRow = () => {
  const theme = useTheme();
  const { t } = useTranslation(["remontas"]);

  const {
    remontasGrafika: { src, alt },
  } = pageImages;

  return (
    <>
      <Typography sx={{ mb: theme.spacing(4) }} id={t("static.section2_price_list_id")} variant="h4">
        {t("static.section_about_us_title")}
      </Typography>
      <AboutUsSection>
        <div>
          <Typography
            variant="body1"
            sx={{
              fontSize: "clamp(1rem, 0.95rem + 0.35vw, 1.25rem)",
              paddingRight: theme.spacing(2),
              textAlign: "left",
            }}
          >
            {t("static.section_about_us")}
          </Typography>
          <Typography
            fontWeight={500}
            sx={{
              color: theme.palette.primary.main,
              fontSize: "clamp(1.0625rem, 1rem + 0.4vw, 1.35rem)",
              maxWidth: "28rem",
              mt: theme.spacing(4),
              width: "100%",
            }}
          >
            {t("static.section3_repair_process_info_initial_inspection").toUpperCase()}
          </Typography>
        </div>
        <ImageWrap sx={{ position: "relative" }}>
          <Image
            alt={alt}
            height={721}
            sizes="(max-width: 900px) 100vw, 50vw"
            src={src}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            width={1080}
          />
        </ImageWrap>
      </AboutUsSection>
    </>
  );
};

const ReviewRow = () => {
  const theme = useTheme();
  const { t } = useTranslation("remontas");

  const cardData: Array<ReviewCardData> = [
    {
      headerInitials: "BO",
      headerName: "Božena",
      reviewText: t("static.section4_reviews_Bozena"),
    },
    {
      headerInitials: "AJ",
      headerName: "A.J",
      reviewText: t("static.section4_reviews_AJ"),
    },
    {
      headerInitials: "AU",
      headerName: "Aušra A.",
      reviewText: t("static.section4_reviews_AusraA"),
    },
    {
      headerInitials: "DO",
      headerName: "Donatas G.",
      reviewText: t("static.section4_reviews_DonatasG"),
    },
    {
      headerInitials: "VY",
      headerName: "Vytautas P.",
      reviewText: t("static.section4_reviews_VytautasP"),
    },
    {
      headerInitials: "ŠA",
      headerName: "Šarūnas",
      reviewText: t("static.section4_reviews_Sarunas"),
    },
    {
      headerInitials: "RE",
      headerName: "Renata",
      reviewText: t("static.section4_reviews_Renata"),
    },
    {
      headerInitials: "EG",
      headerName: "Egidijus",
      reviewText: t("static.section4_reviews_Egidijus"),
    },
  ];

  return (
    <>
      <Typography sx={{ mb: theme.spacing(4) }} id={t("static.section2_price_list_id")} variant="h4">
        {t("static.section4_reviews")}
      </Typography>
      <ReviewCardSection>
        {cardData.map(({ headerInitials, headerName, reviewText }) => (
          <RemontasReviewCard
            key={headerInitials}
            headerInitials={headerInitials}
            headerName={headerName}
            reviewText={reviewText}
          />
        ))}
      </ReviewCardSection>
    </>
  );
};

const FAQRow = () => {
  const theme = useTheme();
  const { t } = useTranslation(["remontas"]);

  const faqData = [
    {
      title: t("static.section5_title_malware"),
      body: t("static.section5_malware_body"),
    },
    {
      title: t("static.section5_title_overload"),
      body: t("static.section5_overload_body"),
    },
    {
      title: t("static.section5_title_power_grid"),
      body: t("static.section5_body_power_grid"),
    },
    {
      title: t("static.section5_title_cleaning?"),
      body: t("static.section5_body_cleaning"),
    },
    {
      title: t("static.section5_title_clean_display"),
      body: t("static.section5_body_clean_display"),
    },
    {
      title: t("static.section5_title_ventilated_room"),
      body: t("static.section5_body_ventilated_room"),
    },
    {
      title: "",
      body: t("static.section5_closing"),
    },
  ];

  return (
    <FAQSection>
      <Typography variant="h4">{t("static.section5_FAQ")}</Typography>
      <Paper elevation={0}>
        {faqData.map(({ title, body }) => (
          <React.Fragment key={title}>
            {!!title && (
              <StyledFAQTittle
                variant="h5"
                sx={{
                  "&::before": {
                    content: `"${title.split(" ")[0]} "`,
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                  },
                }}
              >
                <Badge variant="dot" color="default" />
                {title
                  .split(" ")
                  .filter((_, index) => index !== 0)
                  .join(" ")}
              </StyledFAQTittle>
            )}
            <Typography component="p" sx={{ fontSize: "0.9375rem", lineHeight: 1.65 }} variant="body1">
              {body}
            </Typography>
          </React.Fragment>
        ))}
      </Paper>
    </FAQSection>
  );
};

const Remontas = () => {
  const repairListData = useGetRepairsListQuery();
  const { t } = useTranslation(["remontas", "common"]);
  const repairList = repairListData.data?.repairs?.data;

  const {
    kompiuteriuRemontasMain: { src, alt },
  } = pageImages;

  const breadcrumbs = [
    {
      linkName: t("common:header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("common:header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("common:header_link_remontas") ?? Pages.Remontas.name,
      linkPath: t("common:header_link_remontas_path") ?? Pages.Remontas.fallBackPath,
    },
  ];

  const repairTableData =
    repairList?.map(({ attributes }) => ({
      ...attributes!,
      Description: attributes!.Description.trim().replace(/\s\s+/g, " ") as keyof Omit<Resources["remontas"], "static">,
    })) ?? [];

  return (
    <>
      <LayoutNoContainer pageName={Pages.Remontas.name}>
        <HeroWithOverlay>
          <ImageContainer>
            <StyledImage src={src} alt={alt} />
          </ImageContainer>
          <PhoneRow />
        </HeroWithOverlay>
        <Container maxWidth="xl">
          <RemontasContainer>
            <BreadcrumbList breadcrumbList={breadcrumbs} />
            <RepairTableRow data={repairTableData} />
            <BulletPointRow />
            <RepairRow />
            <AboutUsRow />
            <ReviewRow />
            <FAQRow />
          </RemontasContainer>
        </Container>
      </LayoutNoContainer>
    </>
  );
};

export default Remontas;
