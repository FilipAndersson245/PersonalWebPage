import React from "react";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import CssBaseline from "@material-ui/core/CssBaseline";

export const App = () => (
  <>
    <CssBaseline />
    <Header />
    <Layout />
  </>
);
