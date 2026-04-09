import Container from "@mui/material/Container";
import React, { ReactNode } from "react";
import Footer from "@/src/components/Footer";
import NavigationAppBar from "@/src/components/Navigation/NavigationAppBar";
import PageHead from "@/src/components/PageHead";
import theme from "@/src/theme";
import { PageNames } from "@/src/helpers/types";
import CallIcon from "@mui/icons-material/Call";
import { Fab } from "@mui/material";

const mainLayoutStyles = {
  marginBottom: theme.spacing(6),
  minHeight: "calc(100vh - 110px)",
};

interface MainLayoutProps {
  children: ReactNode;
  styles?: React.CSSProperties;
  pageName: PageNames;
  isProductPage?: boolean;
}

const CallUsCTA = () => {
  return (
    <Fab
      color="primary"
      aria-label="call-us"
      sx={{
        bottom: "2rem",
        position: "fixed",
        right: "1rem",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      }}
      component="a"
      href="tel:+370 699 62246"
    >
      <CallIcon />
    </Fab>
  );
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, styles, pageName, isProductPage = false }) => {
  return (
    <>
      <PageHead name={pageName} isProductPage={isProductPage} />
      <NavigationAppBar />
      <CallUsCTA /> 
      <Container
        maxWidth="xl"
        sx={{
          ...mainLayoutStyles,
          ...(styles ?? {}),
        }}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};

export const LayoutNoContainer: React.FC<MainLayoutProps> = ({ children, pageName, isProductPage = false }) => {
  return (
    <>
      <PageHead name={pageName} isProductPage={isProductPage} />
      <NavigationAppBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
