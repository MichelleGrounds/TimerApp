import { createMuiTheme } from "@material-ui/core/styles";

const aquamarine = "#78FFD6";
const blackCoffee = "#37323E";
const steelTeal = "#6E8387";
const bittersweet = "#FF6B6B";
const lightCyan = "#E1FAF9";

const theme = {
  dark: {
    aquamarine,
    blackCoffee,
    steelTeal,
    bittersweet,
    lightCyan,
  },
  palette: {
    primary: {
      main: bittersweet,
      dark: bittersweet,
      light: bittersweet,
      contrastText: bittersweet,
    },
  },
};

export default createMuiTheme(theme);
