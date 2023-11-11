import { createTheme } from "@mui/material";

import InterRegular from "/fonts/Inter-Regular.ttf";
import InterMedium from "/fonts/Inter-Medium.ttf";
import InterBold from "/fonts/Inter-Bold.ttf";
import { palette } from "../../../shared/config/palette";

export const theme = createTheme({
  palette: {
    error: { main: "#FF3B30" },
    primary: { main: "#FC5055", light: "#DD434B", dark: "#DC3B43" },
    secondary: { main: "#003790" },
    text: {
      secondary: "#616161",
      primary: "#212121",
      disabled: "#BDBDBD",
      // teritary: "#BDBDBD",
    },
    background: {
      default: "#F6F7F8",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.tertiary,
          margin: 0,
        },
      },
    },
    MuiBottomNavigationAction: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: "#BDBDBD",
          "&.Mui-selected": {
            color: "#003790",
          },
        },
        label: {
          color: "#BDBDBD",
          "&.Mui-selected": {
            color: "#003790",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${InterRegular}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: "Inter";
          font-style: medium;
          font-display: swap;
          font-weight: 500;
          src: local('Inter'), local('Inter-Medium'), url(${InterMedium}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: "Inter";
          font-style: bold;
          font-display: swap;
          font-weight: 700;
          src: local('Inter'), local('Inter-Bold'), url(${InterBold}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
