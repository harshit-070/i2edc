import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";
import Team from "../../ecell/components/Team/Team";
import Projects from "../../ecell/components/Projects/Projects";
import ecell from "../../assests/images/ecell.png";
function Ecell(props) {
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
                Entrepreneurship Cell
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                A call for learning, imagination and innovation!
              </p>
            </div>
            <div className="projects-heading-img-div">
              <img src={ecell} alt="" />
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
        The Entrepreneurship Cell, IIT Jammu, aims to identify the brightest
        ideas from aspirants and helps them by giving them a platform to convert
        their ideas into successful startups. The cell&apos;s mission is to help
        aspiring entrepreneurs start and grow their businesses by creating
        various opportunities like interactive sessions with professionals and
        business competitions to increase awareness to help them understand the
        business world, foster entrepreneurial thinking, and instil confidence
        in every aspirant. The cell&apos;s vision is to help students with an
        idea, product and burning desire to give HR, management, influential
        skills, market exposure and investors for their startup.
      </p>

      {
        <h2 className="about__role link" style={{ color: theme.text }}>
          What We Do
        </h2>
      }
      <p className="projects-header-detail-text subTitle">
        E-Cell organises a variety of events to promote entrepreneurial
        activities in and around the campus.Events like Case study
        Competition,Ideathon,Treasure Hunt and other exploration games have been
        conducted,which are mind boosting sessions for IIT Jammu Students.
        E-Cell also conducts workshops and talks of well-known Entrepreneurs.
      </p>
      <br />
      <br />
      <Projects theme={props.theme} />
      <br />
      <br />
      <Team theme={props.theme} />
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Ecell;

/*

import Team from '../../ecell/components/Team/Team'
import Projects from '../../ecell/components/Projects/Projects';
import ProjectCard from "../../components/ProjectCard/ProjectCard";



function Ecell(props) {
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
               E-Cell
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                
              </p>
            </div>
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
         
          </div>
        </Fade>
      </div>
      {<h2 className='about__role link'>About Us</h2>}
      <p className='projects-header-detail-text subTitle'>
      The Entrepreneurship Cell, IIT Jammu, aims to identify the brightest ideas from aspirants and helps them
by giving them a platform to convert their ideas into successful startups.
The cell&apos;s mission is to help aspiring entrepreneurs start and grow their businesses by creating various
opportunities like interactive sessions with professionals and business competitions to increase
awareness to help them understand the business world, foster entrepreneurial thinking, and instil
confidence in every aspirant.
The cell&apos;s vision is to help students with an idea, product and burning desire to give HR, management,
influential skills, market exposure and investors for their startup.
    </p>
    <br />
      <br />
     {<h2 className='about__role link'>What We Do</h2>}
      <p className='projects-header-detail-text subTitle'>
      E-Cell organises a variety of events to promote entrepreneurial activities in and around the
campus.Events like Case study Competition,Ideathon,Treasure Hunt and other exploration games have
been conducted,which are mind boosting sessions for IIT Jammu Students. E-Cell also conducts
workshops and talks of well-known Entrepreneurs.
</p>
      <br />
      <br />
      <br />
      <Projects theme={props.theme}  />
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

export default Ecell;
*/
