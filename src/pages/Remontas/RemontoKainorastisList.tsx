import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import { Enum_Repair_Repairtype } from "@/api/generated/graphql";
import Resources from "@/@types/resources";
import { useTranslation } from "next-i18next";
import { stableSort, getComparator, SortOrder } from "@/src/pages/Remontas/remontoKainorastisHelpers";

export interface RemontasData {
  Description: keyof Omit<Resources["remontas"], "static">;
  RepairType: Enum_Repair_Repairtype;
  Price: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof RemontasData;
  label: string;
  numeric: boolean;
}

const EnhancedTableHead = (props: {
  numSelected: number;
  // eslint-disable-next-line no-unused-vars
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof RemontasData) => void;
  order: SortOrder;
  orderBy: string;
  rowCount: number;
}) => {
  const { order, orderBy, onRequestSort } = props;
  const { t } = useTranslation(["remontas", "common"]);

  const createSortHandler = (property: keyof RemontasData) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  const headCells: readonly HeadCell[] = [
    {
      disablePadding: false,
      id: "Description",
      label: t("static.section2_price_list_repair_description"),
      numeric: false,
    },
    {
      disablePadding: false,
      id: "Price",
      label: t("static.section2_price_list_price") + " €",
      numeric: true,
    },
  ];

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default function RemontasTable({ data }: { data: Array<RemontasData> }) {
  const theme = useTheme();
  const [order, setOrder] = React.useState<SortOrder>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof RemontasData>("RepairType");
  const [selected] = React.useState<readonly string[]>([]);
  const { t } = useTranslation(["remontas", "common"]);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof RemontasData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ boxShadow: "0 4px 30px 0 rgb(0 0 0 / 10%)", mb: "1rem", width: "100%" }}>
        <div style={{ background: theme.palette.primary.main, height: "4px" }} />
        <TableContainer sx={{ WebkitOverflowScrolling: "touch", overflowX: "auto" }}>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy)).map((row, index) => (
                <TableRow hover key={index}>
                  <TableCell align="left">{t(row.Description)}</TableCell>
                  <TableCell align="right">{row.Price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
