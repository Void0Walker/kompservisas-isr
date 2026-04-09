import { keyframes } from "@mui/material/styles";

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(+15%);
  }
`;

const slideOutAnimation = {
  animation: `${slideOut} 1s ease forwards`,
};

export default slideOutAnimation;
