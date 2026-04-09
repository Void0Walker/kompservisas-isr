import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LoadingBar: React.FC = () => (
  <Box sx={{ width: "100%" }}>
    <LinearProgress />
  </Box>
);

export default LoadingBar;
