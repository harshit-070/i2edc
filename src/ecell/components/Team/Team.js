import Grid from "@mui/material/Grid";
import * as React from "react";

import { makeStyles, styled } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { team } from "../../portfolio";
import "./team.css";
import bhavyta from "./images/bhavyta.jpg";
import shruti from "./images/shruti.jpg";
import pranavi from "./images/pranavi.jpg";
import shivanshu from "./images/shivanshu.jpg";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const useStyles = makeStyles(() => ({
  media: {
    height: "300px",
    width: "300px",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
      width: "150px",
    },
  },
}));
const Team = (props) => {
  const theme = props.theme;
  const classes = useStyles();
  if (!team.length) return null;
  return (
    <section id="team">
      <h2 className="section__title link" style={{ color: theme.text }}>
        Team
      </h2>
      <Grid container spacing={4}>
        <Grid item xs={6} md={8} lg={6}>
          <div className="member">
            <CardMedia
              className={classes.media}
              image={bhavyta}
              title="Bhavyta Aggarwal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Bhavyta Aggarwal
              </Typography>
              <Typography variant="p" component="p">
                Coordinator
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={6} md={8} lg={6}>
          <div className="member">
            <CardMedia
              className={classes.media}
              image={pranavi}
              title="Pranavi Chinatala"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Pranavi Chinatala
              </Typography>
              <Typography variant="p" component="p">
                Manager
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={6} md={8} lg={6}>
          <div className="member">
            <CardMedia
              className={classes.media}
              image={shivanshu}
              title="Shivanashu Tripathi"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Shivanashu Tripathi
              </Typography>
              <Typography variant="p" component="p">
                Manager
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={6} md={8} lg={6}>
          <div className="member">
            <CardMedia
              className={classes.media}
              image={shruti}
              title="Shruti Seth"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Shruti Seth
              </Typography>
              <Typography variant="p" component="p">
                Treasurer
              </Typography>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Team;
