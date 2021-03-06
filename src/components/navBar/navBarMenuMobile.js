import React from "react";
import {items} from "./items";
import {Link} from "react-scroll";
import {NAV_BAR_HEIGHT} from "../../core/constants";
import {HiX} from "react-icons/hi";
import PropTypes from "prop-types";
import SpriteIcon from "../buttons/spriteIcon";
import InfoButtons from "./infoButtons";
import {Trans} from "react-i18next";

const NavBarMenuMobile = ({showMenu = false, closeMenu, onChangeLanguage}) => {
  return (
    <div className={"nav-menu-mobile" + (showMenu ? " show-menu-mobile" : "")}>
      <HiX className="icon menu-icon" onClick={closeMenu} />
      <ul className="nav__list-mobile">
        {items.map((item) => {
          const index = item.id;
          return (
            <Link
              to={item.url}
              smooth={true}
              offset={-NAV_BAR_HEIGHT}
              duration={500}
              className="nav__item"
              key={index}
              onClick={closeMenu}
            >
              <Trans i18nKey={item.label}>{item.label}</Trans>
            </Link>
          );
        })}
        <InfoButtons middleware={closeMenu} />
        <div className="flags-mobile">
          <SpriteIcon
            classname="flag"
            name="english"
            onClick={() => {
              closeMenu();
              onChangeLanguage("en");
            }}
          />
          <SpriteIcon
            classname="flag"
            name="italian"
            onClick={() => {
              closeMenu();
              onChangeLanguage("it");
            }}
          />
        </div>
      </ul>
    </div>
  );
};

export default NavBarMenuMobile;

NavBarMenuMobile.propTypes = {
  showMenu: PropTypes.bool,
  closeMenu: PropTypes.func.isRequired,
  onChangeLanguage: PropTypes.func,
};
