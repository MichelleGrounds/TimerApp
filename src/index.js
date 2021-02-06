import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "fontsource-roboto";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.dark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
