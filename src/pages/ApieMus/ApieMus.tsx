import React from "react";
import MainLayout from "@/src/components/Layout";
import Image from "next/image";
import imageStyles from "@/src/pages/ApieMus/ApieMus.module.css";
import { Box, Typography } from "@mui/material";
import theme from "@/src/theme";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import { Pages } from "@/src/metaData";
import styles, { Styled } from "@/src/pages/ApieMus/apieMusStyles";
import { useTranslation, Trans } from "react-i18next";

const ApieMus = () => {
  const { t } = useTranslation(["common", "apie-mus"]);

  const breadcrumbs = [
    {
      linkName: t("common:header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("common:header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("common:footer_link_about_us") ?? Pages.ApieMus.name,
      linkPath: t("common:footer_link_about_us_path") ?? Pages.ApieMus.fallBackPath,
    },
  ];

  return (
    <MainLayout pageName={Pages.ApieMus.name}>
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <BreadcrumbList breadcrumbList={breadcrumbs} />
      </Box>
      <Styled.ApieMusContainer>
        <Styled.ShopImageRow>
          <div style={{ display: "block" }}>
            <Image
              src={
                "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1645391892/kompservisas-apie-mus/kompservisas-shop.webp"
              }
              alt={"Kompservisas shop"}
              layout="responsive"
              width={858}
              height={504}
              sizes={"50vw"}
              priority
              className={imageStyles.e_shopImage}
            />
          </div>
          <div>
            <Typography variant="h2" sx={styles.subtitle}>
              {t("apie-mus:section1_title_about_US")}
            </Typography>
            <Typography sx={styles.paragraph}>
              <Trans
                i18nKey="section1_body_description"
                ns="apie-mus"
                defaults='Įmonė <strong>UAB Kompservisas</strong> specializuojasi naudotų verslo klasės kompiuterių prekybos bei aptarnavimo sferoje. Verslą pradėjome dar 2000ias metais pavadinimu "Kibirnetas". <strong>{{value}} metai patirties</strong> rinkoje leidžia mums užtikrinti teikiamų paslaugų kokybę, bei garantuoti parduodamos elektronikos našumą ir ilgaamžiškumą.'
                values={{ value: new Date().getFullYear() - 2000 }}
                components={{ strong: <strong /> }}
              >
                {null}
              </Trans>
            </Typography>
          </div>
        </Styled.ShopImageRow>
        <Styled.ThinkpadsImageRow>
          <Styled.ParagraphContainer displayOnMobile={false}>
            <Typography variant="h2" sx={styles.subtitle}>
              {t("apie-mus:section2_title_cooperation")}
            </Typography>
            <Typography sx={styles.paragraph}>
              <Trans i18nKey={"section2_body_description"} ns="apie-mus">
                Esame atviri bendradarbiavimo pasiūlymams. Galime tiekti kompiuterinę techniką jūsų ofisui, viešajai
                įstaigai ar municipaliniam objektui. Visą parduodamą techniką tikriname patys. Suteikiame garantiją,
                išrašome sąskaitas faktūras, parduodame techniką lizingu. Susisiekite su mumis nuspaudę mygtuką
                &quot;Susisiekti&quot; arba paskambinę šiais telefono numeriais: <strong>+370 699 69578</strong>,{" "}
                <strong>+370 699 62246.</strong>
              </Trans>
            </Typography>
          </Styled.ParagraphContainer>
          <div style={{ display: "block" }}>
            <Image
              src={
                "https://res.cloudinary.com/kalandarisvili-dev/image/upload/c_scale,q_100,w_835/v1645561264/kompservisas-apie-mus/thinkpads-puzzle.png"
              }
              alt={"Kompservisas shop"}
              layout="responsive"
              width={835}
              height={470}
              sizes={"50vw"}
              priority
              className={imageStyles.e_shopImage}
            />
          </div>
          <Styled.ParagraphContainer displayOnMobile={true}>
            <Typography variant="h2" sx={styles.subtitle}>
              {t("apie-mus:section2_title_cooperation")}
            </Typography>
            <Typography sx={styles.paragraph}>
              <Trans i18nKey={"section2_body_description"} ns="apie-mus">
                Esame atviri bendradarbiavimo pasiūlymams. Galime tiekti kompiuterinę techniką jūsų ofisui, viešajai
                įstaigai ar municipaliniam objektui. Visą parduodamą techniką tikriname patys. Suteikiame garantiją,
                išrašome sąskaitas faktūras, parduodame techniką lizingu. Susisiekite su mumis nuspaudę mygtuką
                &quot;Susisiekti&quot; arba paskambinę šiais telefono numeriais: <strong>+370 699 69578</strong>,{" "}
                <strong>+370 699 62246.</strong>
              </Trans>
            </Typography>
          </Styled.ParagraphContainer>
        </Styled.ThinkpadsImageRow>
      </Styled.ApieMusContainer>
    </MainLayout>
  );
};

export default ApieMus;
