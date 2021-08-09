import React from "react";
import {Trans} from "react-i18next";
import PropTypes from "prop-types";

const Stats = ({name, value = "100%"}) => {
  const statStyle = {
    width: value,
  };
  return (
    <div className="stat__container">
      <Trans i18nKey={name} />
      <div className="stat__bar-bg">
        <div className="stat__bar" style={statStyle}></div>
      </div>
    </div>
  );
};

export default Stats;

Stats.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
