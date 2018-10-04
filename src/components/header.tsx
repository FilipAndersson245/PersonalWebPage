import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Home from "@material-ui/icons/Home";
import Menu from "@material-ui/icons/Menu";
import React from "react";

export const Header = () => (
  <div>
    <AppBar color="primary" position="relative">
      <Toolbar variant="dense">
        <IconButton color="inherit">
          <Home>Home</Home>
        </IconButton>
        <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
          News
        </Typography>
        <IconButton color="inherit">
          <Menu>Menu</Menu>
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);
