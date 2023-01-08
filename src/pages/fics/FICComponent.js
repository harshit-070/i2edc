import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Certifications from "../../containers/certifications/Certifications";
function FIC(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Skills theme={props.theme} />
      <Certifications theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default FIC;
