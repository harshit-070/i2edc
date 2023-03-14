import Grid from "@mui/material/Grid";
import * as React from "react";

import { makeStyles, styled } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./team.css";
import rishika from "./images/rishika.jpg";
import dharmik from "./images/dharmik.jpg";
import atharva from "./images/atharva.jpg";
import rachit from "./images/rachit.jpg";
import Sahil from "./images/Sahil.jpg";
import tanisha from "./images/tanisha.jpg";
import deepanshu from "./images/deepanshu.jpg";

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
              image={harshit}
              title="Harshit"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Harshit
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
                <em>Batch of 2019</em>
              </Typography>
              <Typography variant="p" component="p">
                Mentor
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={6} md={8} lg={6}>
          <div className="member">
            <CardMedia
              className={classes.media}
              image={rachit}
              title="Rachit Bundiwal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Rachit Bundiwal
              </Typography>
             
              <Typography variant="p" component="p">
                kuch to h
              </Typography>
            </CardContent>
          </div>
        </Grid>
     
        <Grid item xs={6} md={8} lg={6}>
          <div className="member">
            <CardMedia
              className={classes.media}
              image={rishika}
              title="Rishika Ranyal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Rishika Ranyal
              </Typography>
              <Typography variant="p" component="p">
                Head-Lab Activity & Training
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={6} md={8} lg={6}>
          <div className="member">
            <CardMedia
              className={classes.media}
              image={atharva}
              title="Atharva Bhunje"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Atharva Bhunje
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
              image={mayank}
              title="Mayank Verma"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mayank Verma
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
              image={tanisha}
              title="Tanisha Khare"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tanisha Khare
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
              image={Sahil}
              title="Sahil Agarwal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sahil
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
              image={harshitj}
              title="Harshit Jain"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Harshit Jain
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
              image={deepanshu}
              title="Deepanshu Mittal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Deepanshu Mittal
              </Typography>
              <Typography variant="p" component="p">
                Manager
              </Typography>
            </CardContent>
          </div>
        </Grid>
        </Grid>
    </section>
  );
};

export default Team;
