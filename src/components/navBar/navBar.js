import React, {useState} from "react";
import {NAV_BAR_HEIGHT, colorPrimary} from "../../core/constants";
import {items} from "./items";
import {Link} from "react-scroll";
import Logo from "./logo";
import {HiMenu} from "react-icons/hi";
import NavBarMenuMobile from "./navBarMenuMobile";
import InfoButtons from "./infoButtons";
import SpriteIcon from "../buttons/spriteIcon";
import PropTypes from "prop-types";
import i18next from "i18next";
import {Trans} from "react-i18next";

const NavBar = ({onChangeLanguage}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleActiveLink = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <NavBarMenuMobile showMenu={!isCollapsed} closeMenu={() => setIsCollapsed(true)} onChangeLanguage={onChangeLanguage} />
      <nav className={"nav"}>
        <div className="nav__content container">
          <Logo />
          <HiMenu className="icon menu-icon" onClick={() => setIsCollapsed(false)} />
          <ul className="nav__list">
            {items.map((item) => {
              const index = item.id;
              const itemClass = "nav__item" + (index === 0 ? " nav__hidden-item" : "");
              const style = {
                color: currentIndex === index ? colorPrimary : "#fff",
              };

              return (
                <Link
                  to={item.url}
                  smooth={true}
                  offset={-NAV_BAR_HEIGHT}
                  duration={500}
                  spy={true}
                  onSetActive={(_) => handleActiveLink(index)}
                  className={itemClass}
                  key={index}
                  style={style}
                >
                  <Trans i18nKey={item.label}>{item.label}</Trans>
                </Link>
              );
            })}
          </ul>
          <div className="nav__actions">
            {i18next.language === "en" ? (
              <SpriteIcon classname="flag" name="english" onClick={() => onChangeLanguage("it")} />
            ) : (
              <SpriteIcon classname="flag" name="italian" onClick={() => onChangeLanguage("en")} />
            )}
            <InfoButtons />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

NavBar.propTypes = {
  onChangeLanguage: PropTypes.func,
};
