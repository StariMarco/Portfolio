import React from "react";
import {Trans} from "react-i18next";
import {Link} from "react-scroll";
import {NAV_BAR_HEIGHT} from "../../core/constants";

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
              <Trans i18nKey="hero.subtitle" values={{subject: "project"}}>
                I love to design and code <br /> beautiful {"project"}
              </Trans>
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
        <div className="hero__image-stack">
          <div className="hero__image-container">
            <picture>
              <source type="image/webp" srcSet="assets/images/hero_image.webp 1x, assets/images/hero_image@2x.webp 2x" />
              <source type="image/png" srcSet="assets/images/hero_image.png 1x, assets/images/hero_image@2x.png 2x" />
              <img className="hero__image" src="assets/images/hero_image.png" alt="The creator of the website" />
            </picture>
          </div>
          <div className="hero__image-headshot_container">
            <div className="hero__image-headshot">
              <picture>
                <source type="image/webp" srcSet="assets/images/HeadShot.webp 1x" style={{display: "block", padding: 0}} />
                <source type="image/png" srcSet="assets/images/HeadShot.png 1x" style={{display: "block", padding: 0}} />
                <img
                  className="hero__image"
                  src="assets/images/HeadShot.png"
                  alt="The creator of the website"
                  style={{display: "block", padding: 0}}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
