import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Faculty from "../../containers/faculty/faculty";
// import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Faculty theme={props.theme} />
      <br />
      <br />
      <br />
      <br />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
