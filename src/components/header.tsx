import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";
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
