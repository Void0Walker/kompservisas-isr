import theme from "@/src/theme";

const title = {
  fontSize: "3.75rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
};

export default title;
