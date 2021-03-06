import React from "react";
import { Typography, Grid, Avatar } from "@material-ui/core";

export const Home = () => (
  <Grid container justify="center" style={{ marginTop: "16" }}>
    <Grid style={{ textAlign: "center" }} item sm={6}>
      <Avatar
        alt="Filip Andersson"
        // tslint:disable-next-line:max-line-length
        src="https://media.licdn.com/dms/image/C4D03AQGL3MiUjZdFJA/profile-displayphoto-shrink_200_200/0?e=1558569600&v=beta&t=iJTCMwSlrOpksHVek5HJlW4S4-aYeUEfPtZEwBqh1x4"
        style={{
          width: 180,
          height: 180,
          margin: "auto",
          marginTop: "10px",
          marginBottom: "20px"
        }}
      />
      <Typography variant="h6">
        I am a third-year computer engineering student at Jönköping university.
        I have a love for technology and passion for modern web technology. This
        is just a side project website for me to use to learn new things and
        maybe display them if I se so fit.
      </Typography>
    </Grid>
  </Grid>
);
