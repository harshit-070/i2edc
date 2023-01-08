import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Team from "./Team/Team";
import layout from "./Team/images/tinker.jpg";
import tinker from "../../assests/images/tinker.jpg";
function TinkerLab(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                Tinkering Lab
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              ></p>
            </div>
            <div className="projects-heading-img-div">
              <img src={tinker} alt="" style={{ borderRadius: "20%" }} />
              {/* <ProjectsImg theme={theme} /> */}
            </div>
          </div>
        </Fade>
      </div>
      {
        <h2 className="about__role link" style={{ color: theme.text }}>
          Mission and Vision
        </h2>
      }
      <p className="projects-header-detail-text subTitle">
        IIT Jammu Tinkering Lab's mission is to create workspaces where young
        minds can learn innovation skills, sculpt their ideas through hands-on
        activities, social and cross-cultural collaboration, and ethical
        leadership. Creative thinkers would get a place to transform their
        imagination into reality. Students will learn to build their models and
        enhance their product development skills, and thus the ability to make
        products indigenously would enhance and thus promote Atma Nirbhar Bharat
        and build innovative solutions to India’s unique problems. All in all,
        we aim to create an Ecosystem that nurtures Futuristic skills like
        complex problem solving, creative thinking, Entrepreneurial skills,
        adaptive thinking, and Computational skills.
      </p>

      <br />
      <br />
      <div className="projects-heading-div">
        <div className="projects-heading-text-div">
          <h2
            // className="projects-heading-text"
            style={{ color: theme.text }}
          >
            Tools and Resources
          </h2>
          <p
            className="projects-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            Currently, 1800 sq. ft. of the area is available. This lab will be
            located in the institute&#39;s academics block, to be open 24*7 for
            the students and faculty members. The lab is located at an optimum
            distance of 170m from student hostels to ensure that all interested
            students can reach the facility within 5-10 minutes from their place
            of stay. Also, the lab will be in close proximity of classrooms and
            faculty offices which will enable the students to seek any help they
            require while completing a project and will enhance the teaching
            experience of faculty members who aim to conduct design and
            innovation courses or any other task as a part of the tinkering lab.
            Also, IIT Jammu is developing a new facility within the next 18
            months and around 8000 -10000 ft 2 is earmarked for Institute
            Innovation &amp; Entrepreneurship Development Center. Tinkerer’s lab
            will be a significant part of this centre.
          </p>
        </div>
        <div className="projects-heading-img-div">
          <img src={layout} alt="" />
        </div>
      </div>
      {
        <h2 className="about__role link" style={{ color: theme.text }}>
          Events
        </h2>
      }
      <p className="projects-header-detail-text subTitle">
        Being a technological institute, we aim to provide solutions with an
        entrepreneurial approach enabling economic and viable implementation and
        distribution of the solution to all those affected by it. For creativity
        to bloom, freedom to think and experiment is must. To ensure the same we
        will conduct events to and provide them with an infrastructure through
        which students could ‘own’ the solution. So, we envision conducting
        events which can be divided as beginner, intermediate and advanced to
        ensure maximum participation from .
      </p>
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={6} md={4} lg={4}>
          <div className="member">
            <CardContent className="project">
              <Typography gutterBottom variant="h4" component="h2">
                Beginner
              </Typography>
              <Typography variant="p" component="p">
                Quizzes
              </Typography>
              <Typography variant="p" component="p">
                Implement the Concept
              </Typography>
              <Typography variant="p" component="p">
                Let's IoT Around
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <div className="member">
            <CardContent className="project">
              <Typography gutterBottom variant="h4" component="h2">
                Intermediate
              </Typography>
              <Typography variant="p" component="p">
                Tinker the Lab
              </Typography>
              <Typography variant="p" component="p">
                Automatica
              </Typography>
              <Typography variant="p" component="p">
                Un-Scrap the Lab
              </Typography>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <div className="member">
            <CardContent className="project">
              <Typography gutterBottom variant="h4" component="h2">
                Advanced
              </Typography>
              <Typography variant="p" component="p">
                Dronothon
              </Typography>
              <Typography variant="p" component="p">
                Sustainable-Days
              </Typography>
              <Typography variant="p" component="p">
                Social Entrepreneurship
              </Typography>
            </CardContent>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Team theme={props.theme} />
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default TinkerLab;
