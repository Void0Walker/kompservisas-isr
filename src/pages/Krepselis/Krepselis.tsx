import styled from "@emotion/styled";
import React from "react";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import MainLayout from "@/src/components/Layout";
import { Pages } from "@/src/metaData";
import flexContainer from "@/src/mixins/flexContainer";
import theme from "@/src/theme";
import KrepselisItemsList from "@/src/pages/Krepselis/KrepselisItemsList";
import KrepselisOrderForm from "@/src/pages/Krepselis/KrepselisOrderForm";

const CartContainer = styled("div")({
  marginTop: "2rem",
  ...flexContainer("space-between", "2rem", "row", "flex-start"),
  "> div": {
    flex: 1,
    [theme.breakpoints.down("md")]: {
      flex: "0 0 100%",
    },
  },
  flexWrap: "wrap",
});

const Krepselis: React.FC = () => {
  const breadcrumbs = [
    {
      linkName: Pages.Pagrindinis.name,
      linkPath: Pages.Pagrindinis.fallBackPath,
    },
    {
      linkName: Pages.Krepselis.name,
      linkPath: Pages.Krepselis.fallBackPath,
    },
  ];

  return (
    <MainLayout pageName={Pages.Krepselis.name}>
      <CartContainer>
        <div>
          <BreadcrumbList breadcrumbList={breadcrumbs} />
          <KrepselisOrderForm />
        </div>
        <div>
          <KrepselisItemsList />
        </div>
      </CartContainer>
    </MainLayout>
  );
};

export default Krepselis;
