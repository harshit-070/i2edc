import React from "react";
import "./faculty.css";
import FacultyCard from "../../components/facultyCard/faculty.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function Faculty(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Message for Students
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <FacultyCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Faculty;
