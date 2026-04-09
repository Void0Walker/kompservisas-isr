import { Pagination, PaginationItem, useTheme } from "@mui/material";
import React from "react";
import { handleAppendParam } from "@/src/helpers/pathUtils";

const PaginationButtons: React.FC<{ pageCount: number; page: number }> = ({ pageCount, page }) => {
  const theme = useTheme();
  if (pageCount === 1) return null;

  return (
    <Pagination
      page={page}
      count={pageCount}
      variant="text"
      shape="rounded"
      size="medium"
      color="primary"
      onChange={(_, page) => handleAppendParam("page", page.toString())}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          sx={{
            outline:
              !item.selected && item.type !== "previous" && item.type !== "next"
                ? `1px solid ${theme.palette.grey[200]}`
                : "",
          }}
        />
      )}
    />
  );
};

export default PaginationButtons;
