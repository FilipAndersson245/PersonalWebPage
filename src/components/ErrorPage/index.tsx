import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const ErrorPage = () => (
  <Grid container justify="center" style={{ marginTop: "16" }}>
    <Grid style={{ textAlign: "center" }} item sm={6}>
      <Typography gutterBottom={true} variant="h1">
        404 Page not found
      </Typography>
      <Typography variant="h6">
        The page could not be found this may be because the page dosent exist or
        something is broken on the developers side.
      </Typography>
    </Grid>
  </Grid>
);

export default ErrorPage;
