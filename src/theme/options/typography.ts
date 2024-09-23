import { TypographyOptions } from "@mui/material/styles/createTypography";
import { pixelsToRem } from "../helpers";

export const typography: TypographyOptions = {
  h1: {
    fontSize: pixelsToRem(48),
    fontWeight: 700,
    textAlign: "center",
  },
};
