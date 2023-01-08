import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import "./Ecell.css";
const App = (props) => {
  const theme = props.theme;

  return (
    <div className="ecell-main ">
      <Header theme={theme} setTheme={props.setTheme} />
      <About />
      <Projects />
      <Team />

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
};

export default App;
