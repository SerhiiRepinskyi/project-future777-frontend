import { createTheme } from "@mui/material/styles";

const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      0: 0,
      320: 320,
      375: 375,
      768: 768,
      1440: 1440,
      1920: 1920,
    },
  },
});

export default breakpointsTheme;

