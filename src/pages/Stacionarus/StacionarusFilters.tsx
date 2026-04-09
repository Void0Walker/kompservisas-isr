import { Box } from "@mui/system";
import LoadingBar from "@/src/components/LoadingBar";
import { CPUData, DisplaySizeData, ManufacturerData, Filters } from "@/src/helpers/types";
import React from "react";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import { FilterBlock, MobileFilters } from "@/src/components/Filters";
import { filterBoxStyles } from "@/src/pages/Nesiojami/NesiojamiFilters";
import { useTranslation } from "next-i18next";

interface FilterProps {
  manufacturerData?: ManufacturerData;
  cpuData?: CPUData;
  displaySizeData?: DisplaySizeData;
  breadcrumbs: BreadcrumbList;
}

const enabledFilters = {
  [Filters.GAMINTOJAS]: {},
  [Filters.PROCESORIUS]: {},
};

const StacionarusFilters: React.FC<FilterProps> = ({ manufacturerData, cpuData, breadcrumbs }) => {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <Box sx={{ ...filterBoxStyles }}>
        <BreadcrumbList breadcrumbList={breadcrumbs} />
        {manufacturerData ? (
          <FilterBlock
            filters={manufacturerData}
            filterBlockDisplayName={t("filters_manufacturer")}
            isAccordionExpanded={true}
            filterBlockName={Filters.GAMINTOJAS}
            enabledFilters={enabledFilters}
          />
        ) : (
          <LoadingBar />
        )}
        {cpuData ? (
          <FilterBlock
            filters={cpuData}
            filterBlockDisplayName={t("filters_processor")}
            isAccordionExpanded={false}
            filterBlockName={Filters.PROCESORIUS}
            enabledFilters={enabledFilters}
          />
        ) : (
          <LoadingBar />
        )}
      </Box>
      <MobileFilters
        filters={{
          [Filters.GAMINTOJAS]: {
            availableFilters: manufacturerData ?? [],
            blockDisplayName: t("filters_manufacturer"),
          },
          [Filters.PROCESORIUS]: {
            availableFilters: cpuData ?? [],
            blockDisplayName: t("filters_processor"),
          },
        }}
        enabledFilters={enabledFilters}
      />
    </>
  );
};

export default StacionarusFilters;
