import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import format from "date-fns/format";

// @ts-ignore
import { SimpleImg } from "react-simple-img";

interface IBlogLink {
  title: string;
  subheader: string;
  image: string;
  link: string;
  date: number;
}

const breakWidth = 840;

export const BlogList = (props: {
  blogLinkPosts: ReadonlyArray<IBlogLink>;
}) => (
  <Grid container justify="center" style={{ marginTop: "16" }}>
    {props.blogLinkPosts.map((item, index) => (
      <BlogItem blogLinks={item} key={index} />
    ))}
  </Grid>
);

const imageBaseStyle: React.CSSProperties = {
  width: "10%",
  paddingTop: "7px",
  paddingBottom: "7px",
  textAlign: "left"
};

const textBaseStyle: React.CSSProperties = {
  width: "80%",
  maxWidth: "1000px",
  float: "right"
};

const BlogItem = (props: { blogLinks: IBlogLink }) => {
  return (
    <Grid style={{ margin: "auto" }} item sm={7}>
      <ButtonBase style={{ marginTop: "25px" }}>
        <Paper
          style={{
            textAlign: "left",
            padding: "15px",
            overflow: "hidden",
            position: "relative"
          }}
          elevation={2}
        >
          <SimpleImg
            src={props.blogLinks.image}
            animationDuration={0.2}
            priority="low"
            style={
              window.innerWidth >= breakWidth
                ? {
                    ...imageBaseStyle,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)"
                  }
                : {
                    ...imageBaseStyle,
                    display: "block",
                    width: "25%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "0px",
                    bottom: "5px"
                  }
            }
          />
          <div
            style={
              window.innerWidth >= breakWidth
                ? textBaseStyle
                : {
                    ...textBaseStyle,
                    float: "none",
                    margin: "auto",
                    top: "-50"
                  }
            }
          >
            <Typography variant="h5" component="h3">
              {props.blogLinks.title}
            </Typography>
            <Typography component="p">{props.blogLinks.subheader}</Typography>
          </div>
          <Typography
            style={{
              textAlign: "right",
              clear: "both",
              fontStyle: "italic",
              color: "#585858",
              fontSize: "0.75em",
              paddingTop: "6px",
              paddingBottom: "0px"
            }}
          >
            {format(props.blogLinks.date, "D MMM, YYYY")}
          </Typography>
        </Paper>
      </ButtonBase>
    </Grid>
  );
};
