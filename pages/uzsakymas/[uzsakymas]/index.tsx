import type { GetServerSideProps } from "next";

import { graphqlRequest } from "@/api/graphqlRequest";
import { Enum_Order_State, GetOrderbyUidDocument } from "@/api/generated/graphql";
import Uzsakymas from "@/src/pages/Uzsakymas/Uzsakymas";

type OrderProps = {
  orderData: {
    ks_id: string | null | undefined;
    state: Enum_Order_State | undefined;
  };
};

export const getServerSideProps: GetServerSideProps<OrderProps> = async (context) => {
  const UID = String(context.params?.uzsakymas ?? "");
  try {
    const data = await graphqlRequest(GetOrderbyUidDocument, { UID });
    const attrs = data.findByUID?.data?.attributes;
    return {
      props: {
        orderData: {
          ks_id: attrs?.Kompservisas_id,
          state: attrs?.State,
        },
      },
    };
  } catch (error) {
    console.error(error, "/uzsakymas graphql");
    return {
      props: {
        orderData: {
          ks_id: undefined,
          state: undefined,
        },
      },
    };
  }
};

export default function UzsakymasPage({ orderData }: OrderProps) {
  return <Uzsakymas orderData={orderData} />;
}
