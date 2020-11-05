import React from "react";
import ReactDOM from "react-dom";
//can still use index.css and the style components
import "./index.css";
import { ThemeProvider } from "styled-components";

import App from "./App";
//the following is allowing us to import the theme into the file we are on:
import theme from "./Theme/index.js";

ReactDOM.render(
  //import theme porvider above and also wrap <App> in <ThemeProvider> tags
  //theme is injected into the theme provider so that theme provider can use the theme object
  //styled components can now consume the theme without having to export theme into other files
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
