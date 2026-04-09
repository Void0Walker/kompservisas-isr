import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import { Box, styled, SxProps, Theme } from "@mui/system";
import React from "react";
import flexContainer from "@/src/mixins/flexContainer";
import { NextRouter, useRouter } from "next/router";
import { generateQueryStringFromList } from "@/src/helpers/pathUtils";
import { SortOrder, SortOrderTypes } from "@/src/helpers/types";
import { isArray, isEmpty } from "lodash-es";
import { useTranslation } from "next-i18next";

const PriceFilterContainer = styled("div")(({ theme }) => ({
  ...flexContainer(undefined, "1rem"),
  [theme.breakpoints.down("md")]: {
    flex: 1,
    justifyContent: "center",
  },
}));

const appendSortingOrderToURL =
  (router: NextRouter) => (sortOrder: SortOrderTypes.FromLowest | SortOrderTypes.FromMostExpensive) => {
    const { query } = router;

    const enabledSortOrder =
      "rusiavimas" in query ? (isArray(query.rusiavimas) ? query.rusiavimas[0] : query.rusiavimas) : undefined;

    const enabledFilters = Object.entries(query)
      .filter(([filterName]) => filterName !== "rusiavimas")
      .map(([filterName, filterValues]) =>
        generateQueryStringFromList(
          filterName,
          isArray(filterValues) ? filterValues : filterValues ? [filterValues] : []
        )
      );

    const filters = (!isEmpty(enabledFilters) ? enabledFilters.join("&") : undefined)
      ? enabledFilters.join("&")
      : undefined;

    const determinedSortOrder =
      enabledSortOrder === sortOrder ? "" : generateQueryStringFromList("rusiavimas", [sortOrder]);

    const queryWithSorting = (
      (filters ? filters : "") + (determinedSortOrder.length > 0 ? `&${determinedSortOrder}` : "")
    ).replace(/&$/, "");

    router.push(
      {
        query: queryWithSorting,
      },
      undefined,
      { scroll: false }
    );
  };

interface PriceSortProps {
  sortOrder?: SortOrder;
  styles?: SxProps<Theme>;
}

const PriceSortButtons: React.FC<PriceSortProps> = ({ sortOrder, styles }) => {
  const theme = useTheme();
  const router = useRouter();
  const isAscActive = sortOrder?.rusiavimas === SortOrderTypes.FromLowest;
  const isDescActive = sortOrder?.rusiavimas === SortOrderTypes.FromMostExpensive;

  const handleSetSortingOrder = appendSortingOrderToURL(router);

  const { t } = useTranslation("common");

  const rootContainerStyles = {
    ...flexContainer(undefined, undefined, undefined, "center"),
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      "&:nth-of-type(1) > div:nth-of-type(1)": {
        display: "none",
      },
    },
  };

  const directionContainerStyles = (active?: boolean) => ({
    alignItems: "center",
    display: "flex",
    textDecoration: active ? "underline" : "none",
  });

  const arrowStyles = (active?: boolean) => ({
    color: active ? theme.palette.text.primary : theme.palette.secondary.main,
  });

  return (
    <Box sx={{ ...rootContainerStyles, ...styles }}>
      <div>
        <Typography>{t("sorting")}</Typography>
      </div>
      <PriceFilterContainer>
        <div onClick={() => handleSetSortingOrder(SortOrderTypes.FromLowest)}>
          <Typography sx={{ ...directionContainerStyles(isAscActive) }}>
            {t("sorting_price_asc")} <ArrowDropUp sx={{ ...arrowStyles(isAscActive) }} />
          </Typography>
        </div>
        <div onClick={() => handleSetSortingOrder(SortOrderTypes.FromMostExpensive)}>
          <Typography sx={{ ...directionContainerStyles(isDescActive) }}>
            {t("sorting_price_desc")}
            <ArrowDropDown sx={{ ...arrowStyles(isDescActive) }} />
          </Typography>
        </div>
      </PriceFilterContainer>
    </Box>
  );
};

export default PriceSortButtons;
