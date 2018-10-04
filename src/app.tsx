import React from "react";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { CssBaseline } from "@material-ui/core";

export const App = () => (
  <div>
    <CssBaseline />
    <Header />
    <Layout />
  </div>
);
