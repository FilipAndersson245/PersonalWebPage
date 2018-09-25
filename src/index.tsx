import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";
import { MemoryRouter } from "react-router";

ReactDOM.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
  document.getElementById("root")
);
