import { Box } from "@mui/system";
import { CPUData, DisplaySizeData, ManufacturerData, Filters } from "@/src/helpers/types";
import React from "react";
import theme from "@/src/theme";
import BreadcrumbList from "@/src/components/BreadcrumbList";
import { FilterBlock, MobileFilters } from "@/src/components/Filters";
import { useTranslation } from "next-i18next";

export const filterBoxStyles = {
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
};

interface FilterProps {
  manufacturerData?: ManufacturerData;
  cpuData?: CPUData;
  ssdData?: DisplaySizeData;
  displaySizeData?: DisplaySizeData;
  breadcrumbs: BreadcrumbList;
}

//maybe this should be a state?
const enabledFilters = {
  [Filters.GAMINTOJAS]: {},
  [Filters.PROCESORIUS]: {},
  [Filters.EKRANO_DYDIS]: {},
  [Filters.SSD_TALPA]: {},
};

const LaptopFilters: React.FC<FilterProps> = ({ manufacturerData, cpuData, displaySizeData, breadcrumbs, ssdData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <Box sx={{ ...filterBoxStyles }}>
        <BreadcrumbList breadcrumbList={breadcrumbs} />
        <FilterBlock
          filters={manufacturerData}
          filterBlockDisplayName={t("filters_manufacturer")}
          isAccordionExpanded={true}
          filterBlockName={Filters.GAMINTOJAS}
          enabledFilters={enabledFilters}
        />
        <FilterBlock
          filters={cpuData}
          filterBlockDisplayName={t("filters_processor")}
          isAccordionExpanded={false}
          filterBlockName={Filters.PROCESORIUS}
          enabledFilters={enabledFilters}
        />
        <FilterBlock
          filters={displaySizeData}
          filterBlockDisplayName={t("filters_screen_size")}
          isAccordionExpanded={false}
          filterBlockName={Filters.EKRANO_DYDIS}
          enabledFilters={enabledFilters}
        />
        <FilterBlock
          filters={ssdData}
          filterBlockDisplayName={t("filters_ssd_size")}
          isAccordionExpanded={false}
          filterBlockName={Filters.SSD_TALPA}
          enabledFilters={enabledFilters}
        />
      </Box>
      <MobileFilters
        filters={{
          [Filters.GAMINTOJAS]: {
            availableFilters: manufacturerData ?? [],
            blockDisplayName: t("filters_manufacturer"),
          },
          [Filters.PROCESORIUS]: { availableFilters: cpuData ?? [], blockDisplayName: t("filters_processor") },
          [Filters.EKRANO_DYDIS]: {
            availableFilters: displaySizeData ?? [],
            blockDisplayName: t("filters_screen_size"),
          },
          [Filters.SSD_TALPA]: { availableFilters: ssdData ?? [], blockDisplayName: t("filters_ssd_size") },
        }}
        enabledFilters={enabledFilters}
      />
    </>
  );
};

export default LaptopFilters;
