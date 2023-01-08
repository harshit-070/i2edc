import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import TinkerLab from "../pages/tinkering/TinkeringLab";
import Ecell from "../pages/ecell/Ecell";
import FIC from "../pages/fics/FICComponent";
import { settings } from "../portfolio.js";

export default function Main(propss) {
  if (settings.isSplash) {
    return (
      <div>
        <BrowserRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={(props) => (
                <FIC
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/preincubation"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />

            <Route
              path="/events"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/tinkeringlab"
              render={(props) => (
                <TinkerLab
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/ecell"
              render={(props) => (
                <Ecell
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/faculty"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/preincubation"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/events"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/tinkeringlab"
              render={(props) => (
                <TinkerLab
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/ecell"
              render={(props) => (
                <Ecell
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
