import styled from "@emotion/styled";
import theme from "@/src/theme";

const DisappearingSpan = styled("span")({
  display: "inline-block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

export default DisappearingSpan;
