import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import flexContainer from "@/src/mixins/flexContainer";
import theme from "@/src/theme";

const sectionMargin = {
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(6),
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(4),
  },
};

const RemontasContainer = styled("div")({
  marginTop: theme.spacing(4),
  ...flexContainer("space-between", 0, "column", "flex-start"),
  "> div": {
    flex: 1,
    [theme.breakpoints.down("md")]: {
      flex: "0 0 100%",
    },
  },
  flexWrap: "wrap",
});

const pageImages = {
  kompiuteriuRemontasMain: {
    alt: "Kompiuterių remontas Vilniuje",
    src: "https://res.cloudinary.com/kalandarisvili-dev/image/upload/w_1080/q_80/v1699865855/kompservisas-remontas/Kompiuteriu_remontas.webp",
  },
  kompiuteriuRemontasProcesas: {
    alt: "Kompiuterių remonto procesas",
    src: "https://res.cloudinary.com/kalandarisvili-dev/image/upload/w_1080/v1700401928/kompservisas-remontas/remonto-procesas.webp",
  },
  remontas: {
    alt: "Remontas",
    src: "https://res.cloudinary.com/kalandarisvili-dev/image/upload/w_1080/v1699608524/kompservisas-remontas/remonto_procesas.webp",
  },
  remontasGrafika: {
    alt: "Remonto grafika",
    src: "https://res.cloudinary.com/kalandarisvili-dev/image/upload/w_1080/q_80/v1702230737/kompservisas-remontas/grafika.webp",
  },
};

/** Slides into place over the hero (parent must be the hero stack, not the page Container). */
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 0.75rem));
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

/** Wraps hero image + overlay copy so PhoneSection is positioned over the photo, not below it. */
const HeroWithOverlay = styled("div")({
  position: "relative",
  width: "100%",
});

const PhoneSection = styled("section")({
  alignItems: "flex-start",
  animation: `${slideDown} 1s ease-out forwards`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  justifyContent: "center",
  left: "50%",
  maxWidth: "min(42rem, min(92%, calc(100% - 1.5rem)))",
  pointerEvents: "none",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(78%, 42rem)",
  zIndex: 2,
  "& a, & button": {
    pointerEvents: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    "& > h1, & > h4, & > h5": {
      textAlign: "center",
    },
    alignItems: "center",
    gap: theme.spacing(2),
    maxWidth: "min(94%, calc(100% - 1rem))",
    width: "90%",
  },
});

const BulletPointSection = styled("section")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  ...sectionMargin,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
});

const AboutUsSection = styled("section")({
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: "1fr 1fr",
  ...sectionMargin,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
});

const RepairSection = styled("section")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  ...sectionMargin,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
});

const ReviewCardSection = styled("section")({
  display: "grid",
  gap: theme.spacing(4),
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  ...sectionMargin,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    "> *:nth-of-type(n+4)": {
      display: "none",
    },
    gridTemplateColumns: "1fr ",
  },
  width: "100%",
});

const FAQSection = styled("section")({
  width: "100%",
  ...sectionMargin,
});

const RepairTableSection = styled("section")({
  width: "100%",
  ...sectionMargin,
});

const darken = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const ImageContainer = styled("div")({
  "&::before": {
    animation: `${darken} 1s ease-in-out forwards`,
    background: "black",
    content: '""',
    inset: 0,
    opacity: 0.65,
    position: "absolute",
    zIndex: 1,
  },
  height: "clamp(11rem, 32vw, 26rem)",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    height: "clamp(10rem, 38vw, 20rem)",
  },
  [theme.breakpoints.down("sm")]: {
    "&::before": {
      opacity: 0.72,
    },
    height: "clamp(12.5rem, 56vw, 18rem)",
  },
});

const RemontasStyledImage = styled("img")({
  display: "block",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 28%",
  width: "100%",
});

const StyledFAQTittle = styled(Typography)({
  margin: "1rem 0",
});

const RemontasStyles = {
  FAQSection,
  HeroWithOverlay,
  ImageContainer,
  PhoneSection,
  RemontasContainer,
  RemontasStyledImage,
  RepairSection,
  RepairTableSection,
  ReviewCardSection,
  StyledFAQTittle,
  pageImages,
  BulletPointSection,
  AboutUsSection,
};

export default RemontasStyles;
