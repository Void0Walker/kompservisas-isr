import React, { useMemo } from "react";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import MainLayout from "@/src/components/Layout";
import { Pages } from "@/src/metaData";
import Image from "next/image";
import imageStyles from "@/src/pages/Supirkimas/Supirkimas.module.css";
import { Typography } from "@mui/material";
import apieMusStyles, { ParagraphContainer } from "@/src/pages/ApieMus/apieMusStyles";
import title from "@/src/mixins/title";
import { Styled } from "@/src/pages/Supirkimas/supirkimasStyles";
import { Trans, useTranslation } from "react-i18next";

const Supirkimas = () => {
  const { t } = useTranslation(["supirkimas", "common"]);

  const breadcrumbs = [
    {
      linkName: t("common:header_link_pagrindins") ?? Pages.Pagrindinis.name,
      linkPath: t("common:header_link_pagrindinis_path") ?? Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: t("common:header_link_supirkimas") ?? Pages.Supirkimas.name,
      linkPath: t("common:header_link_supirkimas_path") ?? Pages.Supirkimas.fallBackPath,
    },
  ];

  const { buyUpText } = useMemo(() => {
    const buyUpParagraph = (text: React.ReactElement | string) => (
      <Typography sx={apieMusStyles.paragraph}>{text}</Typography>
    );

    return {
      buyUpText: (
        <>
          <Typography
            variant="h1"
            sx={{
              ...title,
            }}
          >
            {t("section1_title_buyback")}
          </Typography>

          {buyUpParagraph(
            <>
              <Trans i18nKey={"section1_buyback_no_older"} ns="supirkimas">
                Superkame ne senesnius kaip <strong>5 metų:</strong>
              </Trans>
              <br />
              <Trans i18nKey={"section1_buyback_desktops"} ns={"supirkimas"}>
                - stacionarius kompiuterius (gali būti su įvairiais defektais)
              </Trans>
              <br />
              <Trans i18nKey={"section1_buyback_laptops"} ns={"supirkimas"}>
                - nešiojamus kompiuterius (gali būti su įvairiais defektais)
              </Trans>
              <br />
              <Trans i18nKey={"section1_buyback_monitors"} ns={"supirkimas"}>
                - LCD monitorius gali būti su įvairiais defektais
              </Trans>
              <br />
              <Trans i18nKey={"section1_buyback_desktop_parts"} ns={"supirkimas"}>
                - stacionarių kompiuterių dalis
              </Trans>
              <br />
              <Trans i18nKey={"section1_buyback_laptop_parts"} ns={"supirkimas"}>
                - nešiojamų kompiuterių dalis
              </Trans>
            </>
          )}

          {buyUpParagraph(
            <Trans i18nKey={"section2_buyback_price"} ns="supirkimas">
              Galutinė supirkimo kaina nustatoma apžiūrėjus prekę ir įvertinus jos techninę būklę. Su savimi būtinai
              turėti <strong>asmens tapatybę patvirtinantį dokumentą.</strong>
            </Trans>
          )}

          {buyUpParagraph(
            <Trans i18nKey={"section2_buyback_stolen_goods"} ns="supirkimas">
              Vogtų daiktų arba daiktų parduodamų nepilnamečių asmenų <strong>NESUPERKAME</strong>
            </Trans>
          )}

          {buyUpParagraph(
            <>
              <Trans i18nKey={"section2_buyback_large_quantities"} ns="supirkimas">
                Dėl supirkimo dideliais kiekias prašome kreiptis el. paštu:
                <a href="mailto:info@kompservisas.lt">info@kompservisas.lt</a>
              </Trans>
            </>
          )}
        </>
      ),
    };
  }, [t]);

  return (
    <MainLayout pageName={Pages.Supirkimas.name}>
      <Styled.SupirkimasContainer>
        <BreadcrumbList breadcrumbList={breadcrumbs} />
        <Styled.BuyUpRow>
          <ParagraphContainer displayOnMobile={true}>{buyUpText}</ParagraphContainer>
          <Image
            src={
              "https://res.cloudinary.com/kalandarisvili-dev/image/upload/c_scale,h_798,q_80/v1651075595/kompservisas-supirkimas/supirkimas.webp"
            }
            alt={"Kompservisas buy up"}
            layout="responsive"
            width={599}
            height={798}
            priority
            className={imageStyles.e_shopImage}
          />
          <ParagraphContainer displayOnMobile={false}>{buyUpText}</ParagraphContainer>
        </Styled.BuyUpRow>
      </Styled.SupirkimasContainer>
    </MainLayout>
  );
};

export default Supirkimas;
