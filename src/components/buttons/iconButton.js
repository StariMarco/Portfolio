import React from "react";
import PropTypes from "prop-types";

const IconButton = ({color = "#fff", onClick, children}) => {
  return (
    <div className="icon-button" onClick={onClick} style={{color: color}}>
      {children}
    </div>
  );
};

export default IconButton;

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};
