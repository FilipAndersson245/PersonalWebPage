import React from "react";
import { Header } from "./components/header";
import { Route } from "react-router-dom";

export const App = () => (
  <div>
    <Header />
    <Route path="/" />
  </div>
);
