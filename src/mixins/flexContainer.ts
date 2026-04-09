import { Property } from "csstype";

const flexContainer = (
  justify: Property.JustifyContent = "space-between",
  gap: Property.Gap = 0,
  direction: Property.FlexDirection = "row",
  alignItems: Property.AlignItems = "flex-end"
) => ({
  alignItems,
  display: "flex",
  flexDirection: direction,
  gap,
  justifyContent: justify,
});

export default flexContainer;
