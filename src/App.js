import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import NavBarMenuMobile from "./components/navBar/navBarMenuMobile";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </Router>
    </>
  );
};

export default App;
