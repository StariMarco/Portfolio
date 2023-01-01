import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

import "./core/i18n";
import {useTranslation} from "react-i18next";
import Footer from "./sections/footer";

const App = () => {
  const {i18n} = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div style={{paddingLeft: '20px'}}>
        <p>Loading 2023...</p>
      </div>
      {/* <Router>
        <NavBar onChangeLanguage={changeLanguage} />
        <div className="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Router> */}
    </>
  );
};

export default App;
