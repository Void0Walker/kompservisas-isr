import { Box } from "@mui/system";
import LoadingBar from "@/src/components/LoadingBar";
import { Filters, ManufacturerData, OtherProductTypeData } from "@/src/helpers/types";
import React from "react";
import theme from "@/src/theme";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import { FilterBlock, MobileFilters } from "@/src/components/Filters";
import { useTranslation } from "react-i18next";

export const filterBoxStyles = {
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
};

interface FilterProps {
  manufacturerData?: ManufacturerData;
  breadcrumbs: BreadcrumbList;
  otherProductTypeData?: OtherProductTypeData;
}

//maybe this should be a state?
const enabledFilters = {
  [Filters.GAMINTOJAS]: {},
  [Filters.PREKES_TIPAS]: {},
};

const KitosPrekesFilters: React.FC<FilterProps> = ({ manufacturerData, breadcrumbs, otherProductTypeData }) => {
  const { t } = useTranslation(["common"]);

  const mobileFilters: {
    [blockName: string]: { availableFilters: Array<string | undefined>; blockDisplayName: string };
  } = {
    ...(manufacturerData
      ? { manufacturer: { availableFilters: manufacturerData, blockDisplayName: t("filters_manufacturer") } }
      : {}),
    ...(otherProductTypeData
      ? { productType: { availableFilters: otherProductTypeData, blockDisplayName: t("filters_product_type") } }
      : {}),
  };

  return (
    <>
      <Box sx={{ ...filterBoxStyles }}>
        <BreadcrumbList breadcrumbList={breadcrumbs} />
        {otherProductTypeData ? (
          <FilterBlock
            filters={otherProductTypeData}
            filterBlockDisplayName={t("filters_product_type")}
            isAccordionExpanded={true}
            enabledFilters={enabledFilters}
            filterBlockName={Filters.PREKES_TIPAS}
          />
        ) : (
          <LoadingBar />
        )}
        {manufacturerData ? (
          <FilterBlock
            filters={manufacturerData}
            filterBlockDisplayName={t("filters_manufacturer")}
            isAccordionExpanded={true}
            enabledFilters={enabledFilters}
            filterBlockName={Filters.GAMINTOJAS}
          />
        ) : (
          <LoadingBar />
        )}
      </Box>
      <MobileFilters enabledFilters={enabledFilters} filters={mobileFilters} />
    </>
  );
};

export default KitosPrekesFilters;
