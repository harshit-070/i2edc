import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Button } from "@mui/material";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import pdf from "./procedure.pdf";
function Education(props) {
  const theme = props.theme;
  return (
    <div className="projects-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Pre-Incubation at I2EDC
              </h1>
            </div>
          </div>
        </Fade>
        <br />
        <br />
        <br />
        <br />
        {/* {<h2 className='about__role link' style={{ color: theme.text }}>Mission and Vision</h2>} */}
        <p style={{ color: theme.text }}>
          I2EDC is pleased to announce that the process of Pre-Incubation
          Application at I2EDC IIT Jammu is now completely online. The
          interested faculty members and students for Pre-Incubation may apply
          through the EG portal now. Please follow the below steps.
        </p>
        <p style={{ color: theme.text, fontWeight: "bold" }}>
          EG Portal &gt; Services &gt; I2EDC &gt; I2EDC Preincubation &gt; Add
          New &gt; Fill up the Application Form &gt; Submit.
        </p>
        <p style={{ color: theme.text }}>
          During Application Process the following details will be needed.
        </p>
        <ol style={{ color: theme.text, textAlign: "left" }}>
          <li>Basic details of the Applicant and the team.</li>
          <li>
            Pre-Incubation Concept Note (Detailed Proposal with all relevant
            technical details, 2 Page Concept Note)
          </li>
          <li>Expected TimeLine.</li>
        </ol>
        <p style={{ color: theme.text }}>
          Once the application is received by I2EDC, The same will be
          scrutinized, evaluated, and the decision will be made in 15 days for
          approval or non-approval. The detailed Pre-Incubation Policy is
          attached herewith for your reference. The same will be also made
          available on the I2EDC website very soon.
        </p>
        <p style={{ color: theme.text }}>
          Pre-Incubation is mainly for Ideation of Market Relevant products.
        </p>
        <br />
        <br />
        <Button variant="contained">
          <a
            href={pdf}
            download="I2EDC_Preincubation.pdf"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            I2EDC Preincubation Procedure
          </a>
        </Button>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
