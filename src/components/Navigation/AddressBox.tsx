import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import type { Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material";

const AddressBox = ({ sx, isMobile = false }: { sx?: SxProps<Theme>; isMobile?: boolean }) => {
  const theme = useTheme();

  const addressBox = {
    "> a": {
      "&:hover": {
        color: theme.palette.primary.main,
      },
      color: theme.palette.text.primary,
      textDecoration: "underline",
    },
  };

  const icon = {
    "&:hover": {
      color: theme.palette.primary.main,
    },
    color: theme.palette.text.primary,
    cursor: "pointer",
  };

  return (
    <Box
      gap={"1rem"}
      alignItems={"center"}
      alignContent={"center"}
      display={"flex"}
      sx={{
        ...sx,
        ...addressBox,
        paddingBottom: isMobile ? "2rem" : "unset",
      }}
    >
      <FacebookTwoToneIcon
        sx={{
          ...icon,
        }}
        onClick={() => {
          const newWindow = window.open("https://www.facebook.com/kompservisas", "_blank");
          if (newWindow) {
            newWindow.opener = null;
          }
        }}
      />
      {isMobile && (
        <a rel="noopener noreferrer" href="https://www.facebook.com/kompservisas">
          {"facebook.com/kompservisas"}
        </a>
      )}
      <AlternateEmailIcon
        sx={{
          ...icon,
        }}
        onClick={() => {
          const newWindow = window.open("mailto:info@kompservisas.lt", "_blank");
          if (newWindow) {
            newWindow.opener = null;
          }
        }}
      />
      {isMobile && (
        <a rel="noopener noreferrer" href="mailto:info@kompservisas.lt">
          {"info@kompservisas.lt"}
        </a>
      )}

      <LocationOnOutlinedIcon
        sx={{
          ...icon,
        }}
        onClick={() => {
          const newWindow = window.open(
            "https://www.google.com/maps/place/Kompservisas/@54.67485,25.272171,17z/data=!3m1!4b1!4m6!3m5!1s0x46dd946c477db3dd:0xd0af6ea856bb942!8m2!3d54.67485!4d25.272171!16s%2Fg%2F11c59x86kj?entry=ttu",
            "_blank"
          );
          if (newWindow) {
            newWindow.opener = null;
          }
        }}
      />
      <a
        rel="noopener noreferrer"
        href="https://www.google.com/maps/place/Kompservisas/@54.67485,25.272171,17z/data=!3m1!4b1!4m6!3m5!1s0x46dd946c477db3dd:0xd0af6ea856bb942!8m2!3d54.67485!4d25.272171!16s%2Fg%2F11c59x86kj?entry=ttu"
      >
        Algirdo g. 32 / Šaltinių g. 2, Vilnius{" "}
      </a>
    </Box>
  );
};

export default AddressBox;
