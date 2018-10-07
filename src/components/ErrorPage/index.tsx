import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const ErrorPage = () => (
  <Grid container justify="center">
    <Grid style={{ textAlign: "center" }} item sm={6}>
      <Typography gutterBottom={true} variant="display4">
        404 Page not found
      </Typography>
      <Typography variant="subheading">
        The page could not be found this may be because the page dosent exist or
        something is broken on the developers side.
      </Typography>
    </Grid>
  </Grid>
);
