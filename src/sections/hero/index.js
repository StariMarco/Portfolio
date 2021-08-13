import React from "react";
import {Trans} from "react-i18next";
import {Link} from "react-scroll";
import {NAV_BAR_HEIGHT} from "../../core/constants";
import HeroImage from "./heroImage";

const Hero = () => {
  // TODO: Text writing effect
  // const [subtitleSubject, setSubtitleSubject] = useState("things");

  return (
    <div id="hero-wrapper">
      <div id="hero" className="container">
        <header className="hero__content">
          <section>
            <h1>
              <Trans i18nKey="hero.title">
                Hi! I'm <br />
                Marco Stari
              </Trans>
            </h1>
            <h5>
              <Trans i18nKey="hero.subtitle">I’m a front-end developer and I’m excited to help you build your project</Trans>
            </h5>
            <div className="hero__buttons">
              <Link className="btn btn--primary" to="contact" smooth={true} offset={-NAV_BAR_HEIGHT} duration={500}>
                <Trans i18nKey="hero.primary_button">Let's chat</Trans>
              </Link>
              <a className="btn" href="#">
                <Trans i18nKey="hero.secondary_button">Download Cv</Trans>
              </a>
            </div>
          </section>
        </header>
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
