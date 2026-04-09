import { alpha, styled, Typography } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";

const GradeDescriptionContainer = styled("div")(({ theme }) => ({
  background: alpha(theme.palette.secondary.main, 0.4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(4),
}));

const GradeDescriptionBox: React.FC = () => {
  return (
    <GradeDescriptionContainer>
      <Typography sx={{ marginBottom: (theme) => theme.spacing(2) }}>
        <Trans i18nKey="section1_product_description_product_types" ns="nesiojami">
          <strong>Naudotų kompiuterių rūšys</strong>
        </Trans>
      </Typography>
      <div>
        <Typography>
          <Trans i18nKey="section1_product_description_product_type_A" ns="nesiojami">
            <strong>A</strong> - kompiuteris neturi jokių naudojimo žymių arba tos žymės yra labai menkos.
          </Trans>
        </Typography>
      </div>
      <div>
        <Typography>
          <Trans i18nKey="section1_product_description_product_type_B" ns="nesiojami">
            <strong>B</strong> - kompiuteris turi smulkių naudojimo žymių (smulkus įbrėžimai).
          </Trans>
        </Typography>
      </div>
      <div>
        <Typography>
          <Trans i18nKey="section1_product_description_product_type_C" ns="nesiojami">
            <strong>C</strong> - kompiuteris yra tvarkingas techniškai, tačiau turi stambesnių įbrėžimų ir kitų
            nusidėvėjimo žimių.
          </Trans>
        </Typography>
      </div>
    </GradeDescriptionContainer>
  );
};

export default GradeDescriptionBox;
