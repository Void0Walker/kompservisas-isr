import { Box } from "@mui/system";
import LoadingBar from "@/src/components/LoadingBar";
import { DisplaySizeData, ManufacturerData, Filters } from "@/src/helpers/types";
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
  displaySizeData?: DisplaySizeData;
  breadcrumbs: BreadcrumbList;
}

//maybe this should be a state?
const enabledFilters = {
  [Filters.GAMINTOJAS]: {},
  [Filters.EKRANO_DYDIS]: {},
};

const MonitoriaiFilters: React.FC<FilterProps> = ({ manufacturerData, displaySizeData, breadcrumbs }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Box sx={{ ...filterBoxStyles }}>
        <BreadcrumbList breadcrumbList={breadcrumbs} />
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
        {displaySizeData ? (
          <FilterBlock
            filters={displaySizeData}
            filterBlockDisplayName={t("filters_screen_size")}
            isAccordionExpanded={true}
            enabledFilters={enabledFilters}
            filterBlockName={Filters.EKRANO_DYDIS}
          />
        ) : (
          <LoadingBar />
        )}
      </Box>
      <MobileFilters
        enabledFilters={enabledFilters}
        filters={{
          [Filters.GAMINTOJAS]: {
            availableFilters: manufacturerData ?? [],
            blockDisplayName: t("filters_manufacturer"),
          },
          [Filters.EKRANO_DYDIS]: {
            availableFilters: displaySizeData ?? [],
            blockDisplayName: t("filters_screen_size"),
          },
        }}
      />
    </>
  );
};

export default MonitoriaiFilters;
