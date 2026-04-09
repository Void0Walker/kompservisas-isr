import type { ReactNode } from "react";
import BuildIcon from "@mui/icons-material/Build";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "next-i18next";

type StepProps = {
  desktopTitle: string;
  body: ReactNode;
  icon: ReactNode;
  dotVariant?: "filled" | "outlined";
  isLast?: boolean;
  showTopConnector?: boolean;
};

function RepairStep({
  body,
  desktopTitle,
  dotVariant = "filled",
  icon,
  isLast = false,
  showTopConnector = true,
}: StepProps) {
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={0} sx={{ alignItems: "stretch", minHeight: 0 }}>
      <Box
        sx={{
          display: { md: "block", xs: "none" },
          flex: "0 0 28%",
          maxWidth: { md: "28%" },
          pr: 2,
          pt: 0.5,
          textAlign: "right",
        }}
      >
        <Typography variant="h5">{desktopTitle}</Typography>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          mx: { md: 2, xs: 0 },
          width: 40,
        }}
      >
        {showTopConnector ? (
          <Box
            sx={{
              bgcolor: theme.palette.primary.light,
              flex: "0 0 12px",
              width: 2,
            }}
          />
        ) : (
          <Box sx={{ flex: "0 0 12px", width: 2 }} />
        )}
        <Box
          sx={{
            alignItems: "center",
            bgcolor: dotVariant === "outlined" ? "background.paper" : "primary.main",
            border: dotVariant === "outlined" ? 2 : 0,
            borderColor: "primary.main",
            borderRadius: "50%",
            color: dotVariant === "outlined" ? "primary.main" : "primary.contrastText",
            display: "flex",
            flexShrink: 0,
            height: 40,
            justifyContent: "center",
            width: 40,
          }}
        >
          {icon}
        </Box>
        {!isLast ? (
          <Box
            sx={{
              bgcolor: theme.palette.primary.light,
              flex: 1,
              minHeight: 24,
              width: 2,
            }}
          />
        ) : null}
      </Box>

      <Box sx={{ flex: 1, minWidth: 0, pb: isLast ? 0 : 4, pt: { md: 0, xs: 0 } }}>
        <Typography
          variant="h5"
          sx={{
            display: { md: "none", xs: "block" },
            mb: 1,
          }}
        >
          {desktopTitle}
        </Typography>
        {body}
      </Box>
    </Stack>
  );
}

export default function RemontoProcesas() {
  const theme = useTheme();
  const { t } = useTranslation("remontas");

  return (
    <Stack component="section" spacing={0}>
      <RepairStep
        showTopConnector={false}
        desktopTitle={t("static.section3_repair_process_title_general_evaluation")}
        icon={<ContentPasteSearchIcon sx={{ fontSize: 22 }} />}
        body={
          <>
            <Typography
              fontWeight={500}
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: "0.5rem",
                color: theme.palette.primary.contrastText,
                m: "0.5rem 0",
                p: "1.2rem",
                textAlign: "center",
                [theme.breakpoints.down("md")]: {
                  textAlign: "left",
                },
              }}
            >
              {t("static.section3_repair_process_info_initial_inspection").toUpperCase()}
            </Typography>
            <Typography>{t("static.section3_repair_process_product_evaluation")}</Typography>
          </>
        }
      />
      <RepairStep
        dotVariant="outlined"
        desktopTitle={t("static.section3_repair_process_title")}
        icon={<BuildIcon sx={{ fontSize: 22 }} />}
        body={<Typography>{t("static.section3_repair_process")}</Typography>}
      />
      <RepairStep
        isLast
        desktopTitle={t("static.section3_repair_process_title_handover")}
        icon={<LaptopMacIcon sx={{ fontSize: 22 }} />}
        body={<Typography>{t("static.section3_repair_process_handover")}</Typography>}
      />
    </Stack>
  );
}
