import styled from "@emotion/styled";
import React from "react";

interface GradeProps {
  grade: string;
}

type ContainerProps = {
  background: string;
};

const GradeContainer = styled("div")(({ background }: ContainerProps) => ({
  background,
  borderRadius: "4px",
  color: "white",
  fontSize: 20,
  left: 0,
  padding: "0.5rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  position: "absolute" as const,
  top: 0,
}));

const GradingSystem: React.FC<GradeProps> = ({ grade }) => {
  return <GradeContainer background="#27AE60">{grade} rūšis</GradeContainer>;
};

export default GradingSystem;
