import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import Grid from "@mui/material/Grid";
import { style } from "glamor";
import { NavLink, Link } from "react-router-dom";
/* eslint-disable jsx-a11y/accessible-emoji */
import SocialMedia from "../../components/socialMedia/SocialMedia";
export default function Footer(props) {
  const theme = props.theme;

  return (
    <div className="footer-div">
      <div class="custom-shape-divider-top-1635018379">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
            style={{ fill: theme.body }}
          ></path>
        </svg>
      </div>
      <Grid container spacing={2} className="footer">
        <Grid item xs={6} md={3}>
          <div className="links">
            <Link to="/home" className="link">
              I2EDC
            </Link>
            <Link to="/ecell" className="link">
              E-Cell
            </Link>
            <Link to="/tinkeringlab" className="link">
              Tinkering Lab
            </Link>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <h3>Address</h3>
          <p>
            Idea Factory, I2EDC Lab, 01AC-520, IIT Jammu, Jagti, NH 44, Nagrota,
            Jammu- 181221
          </p>
        </Grid>
        <Grid item xs={6} md={3}>
          <h3>Get in Touch</h3>
          <p>
            {" "}
            Feel free to reach us out on i2edc@iitjammu.ac.in or
            fic.i2edc@iitjammu.ac.in
          </p>
        </Grid>
        <Grid item xs={6} md={3}>
          <h3>Follow Us</h3>
          <SocialMedia />
        </Grid>
      </Grid>

      <p className="footer-text" style={{ color: props.theme.secondaryText }}>
        Copyright ©2021 All rights reserved.
      </p>
    </div>
  );
}
