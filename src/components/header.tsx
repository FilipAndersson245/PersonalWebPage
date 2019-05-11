import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Home from "@material-ui/icons/Home";
import Book from "@material-ui/icons/Book";
// import Menu from "@material-ui/icons/Menu";
import React from "react";
import to from "../helpers/to";

import { withRouter } from "react-router";

const navOptions = ["about", "blog", ""];

export const Header = withRouter((props) => {
  const pathName = props.location.pathname.substring(1).split("/")[0];
  const navTitle = navOptions.includes(pathName) ? pathName : "error";
  const formatedNavTitle = navTitle.charAt(0).toUpperCase() + navTitle.slice(1); // capitalize first char
  document.title = formatedNavTitle || "Filip Andersson website";
  return (
    <nav>
      <AppBar color="primary" position="relative">
        <Toolbar variant="dense">
          <IconButton {...to("/")} color="inherit">
            <Home>Home</Home>
          </IconButton>

          <IconButton {...to("/blog")} color="inherit">
            <Book>Book</Book>
          </IconButton>

          <Typography
            variant="title"
            color="inherit"
            style={{ flexGrow: 1, marginLeft: "1em" }}
          >
            {formatedNavTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
});
