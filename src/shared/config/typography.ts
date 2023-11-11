import { TypographyOptions } from "@mui/material/styles/createTypography";

// Типография для мобилки
export const typographyMobile: TypographyOptions = {
  h1: {
    fontWeight: 700,
    lineHeight: "125%",
    fontSize: "32px",
    letterSpacing: "-0.04rem",
  },
  h2: {
    fontWeight: 700,
    lineHeight: "125%",
    fontSize: "24px",
  },
  h6: { // Card Title
    fontWeight: 500,
    lineHeight: "125%",
    fontSize: "1.5rem"
  },
  body1: {
    fontWeight: 400,
    lineHeight: "125%",
    fontSize: "16px",
  },
  caption: {
    fontWeight: 400,
    lineHeight: "140%",
    fontSize: "14px",
  },
  button: {
    fontWeight: 500,
    lineHeight: "100%",
    fontSize: "20px",
    textTransform: "none"
  },
};

// Типография для десктопа
export const typographyDesktop: TypographyOptions = {
  h1: {
    fontWeight: 700,
    lineHeight: "100%",
    fontSize: "40px",
  },
  h3: {
    fontWeight: 700,
    lineHeight: "125%",
    fontSize: "24px",
  },
  body1: {
    fontWeight: 400,
    lineHeight: "125%",
    fontSize: "20px",
  },
  caption: {
    fontWeight: 400,
    lineHeight: "140%",
    fontSize: "14px",
  },
  button: {
    fontWeight: 500,
    lineHeight: "100%",
    fontSize: "20px",
  },
};
