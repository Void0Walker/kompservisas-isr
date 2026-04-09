import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import flexContainer from "@/src/mixins/flexContainer";

const SummaryRowContainer = styled("div")({
  ...flexContainer("space-between", "0.5rem", "row", "flex-start"),
});

const KrepselisSummary: React.FC = () => {
  const { cartTotal } = useCart();

  const [total, setTotal] = useState<number | undefined>(undefined);

  useEffect(() => setTotal(cartTotal), [cartTotal]);

  return total ? (
    <SummaryRowContainer>
      <Typography fontSize={20}>Viso mokėti (su PVM)</Typography>
      <Typography fontSize={20}>
        <strong>{cartTotal} </strong>€
      </Typography>
    </SummaryRowContainer>
  ) : null;
};

export default KrepselisSummary;
