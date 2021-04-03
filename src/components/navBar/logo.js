import React, {useState, useEffect} from "react";
import {MAX_MOBILE_SIZE, NAV_BAR_HEIGHT} from "../../core/constants";
import {Link} from "react-scroll";

const Logo = () => {
  const [isMobile, setIsMobile] = useState(false);

  const updateLogo = () => {
    setIsMobile(window.innerWidth < MAX_MOBILE_SIZE);
  };

  useEffect(() => {
    updateLogo();
    window.addEventListener("resize", updateLogo);

    return () => {
      window.removeEventListener("resize", updateLogo);
    };
  }, []);

  const content = isMobile ? (
    <span>
      <b>M</b>S
    </span>
  ) : (
    <span>
      <b>Marco</b> Stari
    </span>
  );

  return (
    <Link to="hero" smooth={true} offset={-NAV_BAR_HEIGHT} duration={500} className={`logo${isMobile ? "--mini" : ""} noselect`}>
      {content}
    </Link>
  );
};

export default Logo;
