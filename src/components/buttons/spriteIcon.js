import React from "react";
import sprites from "../../assets/sprite.svg";

const SpriteIcon = ({name = "", classname}) => {
  return (
    <svg className={"sprite-icon" + " " + classname}>
      <use href={sprites + "#" + name}></use>
    </svg>
  );
};

export default SpriteIcon;
