import MainLayout from "@/src/components/Layout";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Pages } from "@/src/metaData";
import Link from "@/src/Link";
import styles, { Styled } from "@/src/pages/Kontaktai/kontaktaiStyles";
import theme from "@/src/theme";
import { Trans, useTranslation } from "next-i18next";
import BreadcrumbList from "@/src/components/BreadcrumbList";

const WorkingHoursContainer = () => {
  const { t } = useTranslation("kontaktai");

  return (
    <Box sx={styles.infoBox}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        UAB Kompservisas
      </Typography>
      <Typography>{t("section1_address", { value: "Algirdo g. 32 / Šaltinių g. 2, LT - 03218" })}</Typography>
      <Typography>{t("section1_working_hours", { value: "I-V 10.00 - 18.00" })}</Typography>
      <Typography>
        <Trans i18nKey="section1_contacts" ns="kontaktai">
          Kontaktai: Tel.
          <a href="tel:+370 699 69578">+370 699 69578</a>,<a href="tel:+370 699 62246">+370 699 62246</a>
        </Trans>
      </Typography>
    </Box>
  );
};

const CompanyInfoContainer = () => {
  const { t } = useTranslation(["kontaktai", "common"]);

  return (
    <Box sx={styles.infoBox}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        {t("section2_title_company_details")}
      </Typography>
      <Typography>
        <Trans i18nKey={"section2_company_code"} ns="kontaktai">
          Įmonės kodas: <strong>304708547</strong>
        </Trans>
      </Typography>
      <Typography>
        <Trans i18nKey={"section2_vat_code"} ns="kontaktai">
          PVM mokėtojo kodas: <strong>LT256753917</strong>
        </Trans>
      </Typography>
      <Typography>
        <Trans i18nKey={"section2_bank_account"} ns="kontaktai">
          A/s Nr. <strong>LT82 7300 0101 2925 3214</strong>
        </Trans>
      </Typography>
    </Box>
  );
};

const SocialContainer = () => {
  const { t } = useTranslation(["kontaktai", "common"]);

  return (
    <Box sx={styles.infoBox}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        {t("section3_title_lets_keep_in_touch")}
      </Typography>
      <Typography>
        <Trans i18nKey={"section3_email"} ns="kontaktai">
          El paštas: <a href="mailto:info@kompservisas.lt">info@kompservisas.lt</a>
        </Trans>
      </Typography>
      <Typography>
        <Trans i18nKey={"section3_about_us"} ns="kontaktai">
          Apie mus:{" "}
          <Link
            href={t("common:footer_link_about_us_path") ?? Pages.ApieMus.fallBackPath}
            sx={{ color: "#0000EE", textDecorationColor: "#0000EE" }}
          >
            kompservisas.lt/apie-mus
          </Link>
        </Trans>
      </Typography>
      <Typography>
        Facebook: <a href="https://www.facebook.com/kompservisas">facebook.com/kompservisas</a>
      </Typography>
    </Box>
  );
};

const Kontaktai = () => {
  const { t } = useTranslation(["kontaktai", "common", "meta"]);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const breadcrumbs = [
    {
      linkName: t("common:header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("common:header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("common:header_link_kontaktai") ?? Pages.Kontaktai.name,
      linkPath: t("common:header_link_kontaktai_path") ?? Pages.Kontaktai.fallBackPath,
    },
  ];

  return (
    <MainLayout pageName={Pages.Kontaktai.name}>
      <Styled.KontaktaiContainer>
        <BreadcrumbList breadcrumbList={breadcrumbs} />
        <Styled.ContactInformationContainer>
          <WorkingHoursContainer />
          <CompanyInfoContainer />
          <SocialContainer />
        </Styled.ContactInformationContainer>
        <Typography variant="h4" sx={{ mb: "2rem", [theme.breakpoints.down("md")]: { mb: "1rem" } }}>
          {t("section4_our_location")}
        </Typography>
        <Box
          style={{
            height: 0,
            overflow: "hidden",
            paddingBottom: isMobile ? "100%" : "36.25%",
            position: "relative",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.976042014423!2d25.272171!3d54.67485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd946c477db3dd%3A0xd0af6ea856bb942!2sKompservisas!5e0!3m2!1sen!2scz!4v1703064116664!5m2!1sen!2scz&zoom=30"
            style={{ border: 0, borderRadius: 8, height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Styled.KontaktaiContainer>
    </MainLayout>
  );
};

export default Kontaktai;
