import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "./home";
import { About } from "./about";
import { ErrorPage } from "./ErrorPage";
import { blog } from "./blog";

export const Layout = () => {
  console.log();
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" exact component={blog} />
        <Route path="/blog/:hash" exact component={blog} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};
