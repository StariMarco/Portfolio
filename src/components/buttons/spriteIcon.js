import React from "react";
import sprites from "../../assets/sprite.svg";

const SpriteIcon = ({name = "", classname, onClick}) => {
  return (
    <svg className={"sprite-icon " + classname} onClick={onClick}>
      <use href={sprites + "#" + name}></use>
    </svg>
  );
};

export default SpriteIcon;
