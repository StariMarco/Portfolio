import React from "react";
import PropTypes from "prop-types";
import IconButton from "../buttons/iconButton";
import {HiOutlineMail} from "react-icons/hi";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {colorPrimary, linkedinUrl, gitHubUrl, email} from "../../core/constants";

const InfoButtons = ({middleware}) => {
  const handleClick = (next) => {
    if (middleware) middleware();
    if (next) next();
  };

  const emailUrl = "mailto:" + email;

  return (
    <div className="nav-icons">
      <IconButton onClick={() => handleClick(() => window.open(linkedinUrl))}>
        <AiFillLinkedin className="icon nav-icon" />
      </IconButton>
      <IconButton onClick={() => handleClick(() => window.open(gitHubUrl))}>
        <AiFillGithub className="icon nav-icon" />
      </IconButton>
      <IconButton color={colorPrimary} onClick={() => handleClick(() => window.open(emailUrl))}>
        <HiOutlineMail className="icon nav-icon" />
      </IconButton>
    </div>
  );
};

export default InfoButtons;

InfoButtons.propTypes = {
  middleware: PropTypes.func,
};
