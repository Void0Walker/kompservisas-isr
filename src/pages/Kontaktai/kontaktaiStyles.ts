import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { SxProps } from "@mui/system";
import theme from "@/src/theme";

const KontaktaiContainer = styled("div")({
  marginTop: theme.spacing(6),
});

const ContactInformationContainer = styled("div")({
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: "1fr 1fr 1fr",
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    marginBottom: theme.spacing(6),
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    marginBottom: theme.spacing(4),
  },
});

const infoBox: SxProps<Theme> = {
  infoBox: { padding: theme.spacing(2) },
};

const markerContainer: SxProps<Theme> = {
  position: "absolute",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
};

export const Styled = {
  ContactInformationContainer,
  KontaktaiContainer,
};

const kontaktaiStyles = {
  infoBox,
  markerContainer,
};

export default kontaktaiStyles;
