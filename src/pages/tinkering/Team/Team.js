import Grid from "@mui/material/Grid";
import * as React from "react";

import { makeStyles, styled } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./team.css";
import prashant from "./images/prashant.png";
import dharmik from "./images/dharmik.jpg";
import kuldeep from "./images/kuldeep.png";

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
              image={prashant}
              title="Prashant Sagar"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Prashant Kumar Sagar
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
              image={dharmik}
              title="Dharmik Shah"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Dharmik Shah
              </Typography>
              <Typography variant="p" component="p">
                Treasurer
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={6} md={8} lg={6}>
          <div className="member">
            <CardMedia
              className={classes.media}
              image={kuldeep}
              title="Kuldeep Kumar"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Kuldeep Kumar
              </Typography>
              <Typography variant="p" component="p">
                <em>Batch of 2016</em>
              </Typography>
              <Typography variant="p" component="p">
                Mentor
              </Typography>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Team;
