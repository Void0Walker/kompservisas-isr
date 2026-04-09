import { alpha, styled, Typography } from "@mui/material";
import React from "react";
import { Enum_Product_Type } from "@/api/generated/graphql";
import { LaptopData, MonitorData, OtherProductsData, TowerData } from "@/src/helpers/types";
import { ArrayElement } from "@/src/helpers/utilityTypes";
import { useTranslation } from "react-i18next";

const StyledTable = styled("table")(({ theme }) => ({
  backgroundColor: "transparent",
  borderCollapse: "collapse",
  borderTop: `.06rem solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
  width: "100%",
}));

const StyledTh = styled("th")(({ theme }) => ({
  background: alpha(theme.palette.secondary.main, 0.4),
  borderBottom: `.06rem solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  textAlign: "center",
}));

const StyledTd = styled("td")(({ theme }) => ({
  borderBottom: `.0625rem solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
}));

const ThColumn = styled("col")(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
}));

const TdColumn = styled("col")(({ theme }) => ({
  width: "70%",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
}));

interface TableProps {
  type: Enum_Product_Type;
  product:
    | ArrayElement<LaptopData>
    | ArrayElement<TowerData>
    | ArrayElement<MonitorData>
    | ArrayElement<OtherProductsData>;
}

const CellName: React.FC<{ text: string }> = ({ text }) => (
  <Typography fontSize={"1.1rem"} fontWeight={"bold"}>
    {text}
  </Typography>
);

const ProductTechSpecsTable: React.FC<TableProps> = ({ product, type }) => {
  const { t } = useTranslation(["product"]);

  const isComputer = type === Enum_Product_Type.Laptop || type === Enum_Product_Type.Tower;

  return product ? (
    <StyledTable>
      <colgroup>
        <ThColumn />
        <TdColumn />
      </colgroup>
      <tbody>
        <tr>
          <StyledTh>
            <CellName text={t("manufacturer")} />
          </StyledTh>
          <StyledTd>{product.manufacturer?.data?.attributes?.Name}</StyledTd>
        </tr>

        <tr>
          <StyledTh>
            <CellName text={t("name")} />
          </StyledTh>
          <StyledTd>{product.Product_Name}</StyledTd>
        </tr>

        {!isComputer && "Other_product_model" in product && (
          <tr>
            <StyledTh>
              <CellName text={t("model")} />
            </StyledTh>
            <StyledTd>{product.Other_product_model}</StyledTd>
          </tr>
        )}

        {"Product_Description" in product && product?.Product_Description !== "" && (
          <tr>
            <StyledTh>
              <CellName text={t("description")} />
            </StyledTh>
            <StyledTd>{"Product_Description" in product ? product.Product_Description : ""}</StyledTd>
          </tr>
        )}

        {isComputer && (
          <tr>
            <StyledTh>
              <CellName text={t("cpu")} />
            </StyledTh>
            <StyledTd>{"CPU" in product ? product.CPU?.data?.attributes?.Name : ""}</StyledTd>
          </tr>
        )}

        {isComputer && (
          <tr>
            <StyledTh>
              <CellName text={t("ram")} />
            </StyledTh>
            <StyledTd>{"ram" in product ? product.ram?.data?.attributes?.RAM : ""}</StyledTd>
          </tr>
        )}

        {isComputer && "storage_ssd" in product && product.storage_ssd?.data?.attributes?.Size && (
          <tr>
            <StyledTh>
              <CellName text={t("ssd")} />
            </StyledTh>
            <StyledTd>
              <div>{product.storage_ssd?.data?.attributes?.Size}</div>
            </StyledTd>
          </tr>
        )}

        {isComputer && "storage_hdd" in product && product.storage_hdd?.data?.attributes?.Size && (
          <tr>
            <StyledTh>
              <CellName text={t("hdd")} />
            </StyledTh>
            <StyledTd>
              <div>{product?.storage_hdd?.data?.attributes?.Size}</div>
            </StyledTd>
          </tr>
        )}

        {isComputer && "gpu" in product && (
          <tr>
            <StyledTh>
              <CellName text={t("graphics_card")} />
            </StyledTh>
            <StyledTd>{product?.gpu?.data?.attributes?.GPU}</StyledTd>
          </tr>
        )}

        {isComputer && "WebCam" in product && (
          <tr>
            <StyledTh>
              <CellName text={t("camera")} />
            </StyledTh>
            <StyledTd>{product.WebCam ? "yra" : "nėra"}</StyledTd>
          </tr>
        )}

        {isComputer && "Wifi" in product && (
          <tr>
            <StyledTh>
              <CellName text={t("wifi")} />
            </StyledTh>
            <StyledTd>{product.Wifi ? "yra" : "nėra"}</StyledTd>
          </tr>
        )}

        {"display_size" in product && product?.display_size?.data?.attributes?.Size && (
          <tr>
            <StyledTh>
              <CellName text={t("screen_size")} />
            </StyledTh>
            <StyledTd>{product?.display_size?.data?.attributes?.Size}</StyledTd>
          </tr>
        )}

        {"resolution" in product && product?.resolution?.data?.attributes?.Resolution && (
          <tr>
            <StyledTh>
              <CellName text={t("screen_resolution")} />
            </StyledTh>
            <StyledTd>{product?.resolution?.data?.attributes?.Resolution}</StyledTd>
          </tr>
        )}

        {isComputer && "operating_system" in product && (
          <tr>
            <StyledTh>
              <CellName text={t("operating_system")} />
            </StyledTh>
            <StyledTd>{product?.operating_system?.data?.attributes?.Name}</StyledTd>
          </tr>
        )}

        {"warranty" in product && product.warranty?.data?.attributes?.Warranty && (
          <tr>
            <StyledTh>
              <CellName text={t("warranty")} />
            </StyledTh>
            <StyledTd>{product.warranty?.data?.attributes?.Warranty}</StyledTd>
          </tr>
        )}
      </tbody>
    </StyledTable>
  ) : null;
};

export default ProductTechSpecsTable;
