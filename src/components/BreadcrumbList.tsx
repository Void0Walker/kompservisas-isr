import { Breadcrumbs, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Link from "@/src/Link";
import { BREADCRUMB_MARGIN_BOTTOM } from "@/src/constants/pageSpacing";

type BreadcrumbList = Array<{
  linkName: string;
  linkPath: string;
}>;

interface Props {
  breadcrumbList: BreadcrumbList;
}

const BreadcrumbList: React.FC<Props> = ({ breadcrumbList }) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: theme.spacing(BREADCRUMB_MARGIN_BOTTOM) }}>
      {breadcrumbList.map(({ linkName, linkPath }) =>
        router.pathname === linkPath ? (
          <Typography key={linkName} sx={{ color: "text.primary", cursor: "default" }}>
            {linkName}
          </Typography>
        ) : (
          <Link key={linkPath} underline="always" color="inherit" href={linkPath}>
            {linkName}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbList;
