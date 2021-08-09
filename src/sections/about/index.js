import React, {useState, useEffect} from "react";
import {Trans} from "react-i18next";
import Stats from "../../components/stats/stats";
import InfoSectionDesktop from "./infoSections/infoSectionDesktop";
import InfoSectionMobile from "./infoSections/infoSectionMobile";

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return (
    <>
      <div id="about" className="container">
        <h2>
          <Trans i18nKey="about.title">About me</Trans>
        </h2>
        <div className="row">
          <article className="about__description">
            <Trans i18nKey="about.description" />
          </article>
          <section className="about__stats">
            <Stats name="experience" value="40%" />
            <Stats name="energy" />
            <Stats name="passion" />
            <Stats name="desire_to_learn" />
          </section>
        </div>
      </div>
      {screenWidth < 900 ? <InfoSectionMobile /> : <InfoSectionDesktop />}
    </>
  );
};

export default About;
