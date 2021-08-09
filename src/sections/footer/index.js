import React from "react";
import {Trans} from "react-i18next";
import {items as LinkItems} from "../../components/navBar/items";
import Logo from "../../components/navBar/logo";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {Link} from "react-scroll";
import {NAV_BAR_HEIGHT} from "../../core/constants";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer id="footer" className="container">
        <div className="footer__content">
          <div className="footer__links">
            {LinkItems.map((item) => (
              <span key={item.id}>
                <Link className="footer__link" to={item.url} smooth={true} offset={-NAV_BAR_HEIGHT} duration={500} key={item.id}>
                  <Trans i18nKey={item.label} />
                </Link>
              </span>
            ))}
          </div>
          <section className="footer__info">
            <p>
              <Trans i18nKey="information">Information</Trans>
            </p>
            <h3>stari.marco11@gmail.com</h3>
            <h6>Viale M. Grigoletti, 93, Pordenone, Italy</h6>
            <div>
              <a href="https://github.com/StariMarco" target="__blank">
                <AiFillGithub className="footer__icon" />
              </a>
              <a href="https://www.linkedin.com/in/marco-stari-68282b191/" target="__blank">
                <AiFillLinkedin className="footer__icon" />
              </a>
            </div>
          </section>
        </div>
        <div className="footer__trailing">
          <Logo disableMobile={true} />
          <p>&copy; 2021 - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
