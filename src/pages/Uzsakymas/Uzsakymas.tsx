import { CheckCircle } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import React from "react";
import { useCart } from "react-use-cart";
import { Enum_Order_State } from "@/api/generated/graphql";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import MainLayout from "@/src/components/Layout";
import { Pages } from "@/src/metaData";
import styles, { Styled } from "@/src/pages/Uzsakymas/uzsakymasStyles";

const determineStatus = (state: Enum_Order_State | undefined) => {
  switch (state) {
    case Enum_Order_State.Created:
      return "PRIIMTA";
    case Enum_Order_State.Accepted:
      return "PATVIRTINTA";
    case Enum_Order_State.Paid:
      return "ĮVYKDYTA";
    default:
      return "PRIIMTA";
  }
};

const breadcrumbs = [
  {
    linkName: Pages.Pagrindinis.name,
    linkPath: Pages.Pagrindinis.fallBackPath,
  },
  {
    linkName: Pages.Uzsakymas.name,
    linkPath: Pages.Uzsakymas.fallBackPath,
  },
];

const Uzsakymas: React.FC<{
  orderData: {
    ks_id: string | null | undefined;
    state: Enum_Order_State | undefined;
  };
}> = ({ orderData }) => {
  const { emptyCart } = useCart();

  emptyCart();

  return (
    <MainLayout pageName={Pages.Uzsakymas.name}>
      <Styled.OrderContainer>
        <div>
          <BreadcrumbList breadcrumbList={breadcrumbs} />
        </div>
        <Styled.ThankYouComeAgainContainer>
          <div>
            <CheckCircle sx={styles.checkIcon} />
          </div>
          <Typography variant="h2" sx={styles.thankYouText}>
            Dėkojame, kad renkatės mus!
          </Typography>
          <Paper sx={styles.orderStatusPaper}>
            <Typography sx={styles.statusInfoText}>
              Užsakymo # <strong>{orderData.ks_id}</strong> statusas:
            </Typography>
            <Typography
              sx={{
                ...styles.statusInfoText,
                color: "#27AE60",
              }}
              fontWeight={600}
            >
              {determineStatus(orderData.state)}
            </Typography>
          </Paper>
        </Styled.ThankYouComeAgainContainer>
      </Styled.OrderContainer>
    </MainLayout>
  );
};

export default Uzsakymas;
