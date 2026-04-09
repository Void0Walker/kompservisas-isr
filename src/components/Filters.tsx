import styled from "@emotion/styled";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary, Typography, AccordionDetails, Checkbox } from "@mui/material";
import { isEmpty, mapValues, omitBy } from "lodash-es";
import { NextRouter, useRouter } from "next/router";
import React, { useMemo } from "react";
import flexContainer from "@/src/mixins/flexContainer";
import theme from "@/src/theme";
import queryString from "query-string";
import { EnabledFilters } from "@/src/helpers/types";
import LoadingBar from "@/src/components/LoadingBar";
import { useTranslation } from "next-i18next";

const mobileFilterStyles = {
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
};

const accordionDetailsStyles = {
  ...flexContainer("flex-start", "0.5rem", "column", "flex-start"),
  padding: theme.spacing(2),
};

const filterBlockAccordionStyles = (expand: boolean) => ({
  boxShadow: expand
    ? "0 4px 30px 0 rgb(0 0 0 / 16%)"
    : "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
});

const appendFilterToURL =
  (enabledFilters: EnabledFilters, filterBlockName: string, router: NextRouter) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    enabledFilters[filterBlockName][event.target.name] = event.target.checked;

    router.push(
      {
        query: queryString.stringify({
          ...mapValues(omitBy(enabledFilters, isEmpty), (value) =>
            Object.entries(value)
              .filter(([, checked]) => checked)
              .map(([filter]) => filter)
          ),
        }),
      },
      undefined,
      {
        scroll: false,
      }
    );
  };

type FilterBlockProps = {
  filters?: Array<string | undefined>;
  filterBlockDisplayName: string;
  isAccordionExpanded: boolean;
  filterBlockName: string;
  enabledFilters: EnabledFilters;
};

const CheckBoxRowContainer = styled("div")({
  ...flexContainer("space-between", undefined, "row", "center"),
  width: "100%",
});

const CheckboxRow: React.FC<{
  filterName: string;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ filterName, checked, onChange }) => (
  <CheckBoxRowContainer>
    {filterName}
    <Checkbox
      checked={checked}
      onChange={onChange}
      name={filterName}
      sx={{
        "&.Mui-checked": {
          color: "primary.main",
        },
      }}
    />
  </CheckBoxRowContainer>
);

const MobileFilters: React.FC<{
  filters: { [blockName: string]: { availableFilters: Array<string | undefined>; blockDisplayName: string } };
  enabledFilters: EnabledFilters;
}> = ({ filters, enabledFilters }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [expand, setExpand] = React.useState<boolean>(false);

  const handleExpandAccordion = () => {
    setExpand((prev) => !prev);
  };

  const transformedFilters: {
    [blockName: string]: {
      availableFilters: {
        [filter: string]: boolean;
      };
      blockDisplayName: string;
    };
  } = useMemo(() => {
    return mapValues(filters, ({ availableFilters, blockDisplayName }) => ({
      availableFilters: Object.fromEntries(availableFilters.map((entry) => [entry ?? "", false])),
      blockDisplayName,
    }));
  }, [filters]);

  return (
    <Accordion
      elevation={1}
      onChange={handleExpandAccordion}
      sx={{
        ...mobileFilterStyles,
        ...filterBlockAccordionStyles(expand),
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: expand ? "black" : "inherit" }} />}
        aria-controls="filters-content-mobile"
        id="filters-header-mobile"
      >
        <Typography>{t("filters")}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ ...accordionDetailsStyles }}>
        {Object.entries(transformedFilters).map(([filterBlockName, { availableFilters, blockDisplayName }]) => (
          <React.Fragment key={filterBlockName}>
            <Typography>
              <strong>{blockDisplayName}</strong>
            </Typography>
            {availableFilters &&
              Object.entries(availableFilters).map(([filterName], index) => (
                <CheckboxRow
                  key={index}
                  checked={enabledFilters[filterBlockName]?.[filterName] ?? false}
                  filterName={filterName}
                  onChange={appendFilterToURL(enabledFilters, filterBlockName, router)}
                />
              ))}
            <br />
          </React.Fragment>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const FilterBlock: React.FC<FilterBlockProps> = ({
  filters,
  filterBlockDisplayName,
  isAccordionExpanded,
  filterBlockName,
  enabledFilters,
}) => {
  const router = useRouter();
  const [expand, setExpand] = React.useState<boolean>(false);
  useMemo(() => setExpand(isAccordionExpanded), [isAccordionExpanded]);

  if (!filters) {
    return <LoadingBar />;
  }

  const availableFilters = Object.fromEntries(filters.map((entry) => [entry ?? "", false]));

  const handleExpandAccordion = () => setExpand((prev) => !prev);
  const handleCheckboxChange = appendFilterToURL(enabledFilters, filterBlockName, router);

  return (
    <Accordion
      expanded={expand}
      onChange={handleExpandAccordion}
      sx={{
        ...filterBlockAccordionStyles(expand),
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: expand ? "black" : "inherit" }} />}
        aria-controls={`${filterBlockName}-content`}
        id={`${filterBlockName}-header`}
      >
        <Typography>{filterBlockDisplayName}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ ...accordionDetailsStyles }}>
        {availableFilters &&
          Object.entries(availableFilters).map(([filterName], index) => (
            <CheckboxRow
              key={index}
              checked={enabledFilters[filterBlockName][filterName] ?? false}
              filterName={filterName}
              onChange={handleCheckboxChange}
            />
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export { MobileFilters, FilterBlock };
