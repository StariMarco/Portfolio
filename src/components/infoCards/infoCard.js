import React, {useState, useEffect} from "react";
import {Trans} from "react-i18next";
import PropTypes from "prop-types";
import {colorPrimary, colorPrimaryText} from "../../core/constants";

const InfoCard = ({title = "", subtitle = "", text = "", icon, isCollapsed = false, onSelectItem, isDesktop = false}) => {
  const [headerColor, setHeaderColor] = useState(colorPrimaryText);

  useEffect(() => {
    setHeaderColor(isCollapsed ? colorPrimaryText : colorPrimary);
  }, [isCollapsed]);

  return (
    <div
      className="info-card"
      onClick={onSelectItem}
      onMouseEnter={() => setHeaderColor(colorPrimary)}
      onMouseLeave={() => setHeaderColor(isCollapsed ? colorPrimaryText : colorPrimary)}
    >
      <header className="info-card__header" style={{color: headerColor}}>
        <h3>
          <Trans i18nKey={title} />
        </h3>
        {icon}
      </header>
      <div className={`info-card__content ${isCollapsed && !isDesktop && "collapsible-content"}`}>
        <h6>
          <Trans i18nKey={subtitle} />
        </h6>
        <p className="info-card__text">
          <Trans i18nKey={text} />
        </p>
      </div>
    </div>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  isCollapsed: PropTypes.bool,
  isDesktop: PropTypes.bool,
  onSelectItem: PropTypes.func.isRequired,
};
