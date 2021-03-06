import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "./home";
import { About } from "./about";
import { Blog } from "./blog";
import ErrorPage from "./ErrorPage";

export const Layout = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:hash" exact component={Blog} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Layout;
