import React from "react";
import "./index.scss";

const CharacterImage = ({ path }) => {
  return (
    <img
      className="character-img"
      src={path + "/portrait_xlarge.jpg"}
      alt=""
      onLoad={(e) => e.target.classList.add("active-character-img")}
    />
  );
};

export default CharacterImage;
