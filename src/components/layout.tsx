import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "./home";
import { About } from "./about";
import { BlogList } from "./listBlogs";
import ErrorPage from "./ErrorPage";
import blogList from "../blogs";

export const Layout = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/blog"
          exact
          component={() => <BlogList blogLinkPosts={blogList} />}
        />
        <Route
          path="/blog/:id"
          exact
          render={(props) => <Foo id={props.match.params.id} />}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

const Foo = (props: { id: number }) => {
  const LazyBlog = React.lazy(() => {
    try {
      const component = import(`../blogs/${props.id}`).catch((_e) => undefined);
      return component;
    } catch (e) {
      return import("./ErrorPage/index");
    }
  });
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyBlog />
    </React.Suspense>
  );
};

export default Layout;
