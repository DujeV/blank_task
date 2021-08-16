import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.scss";

const CharacterCard = ({ char }) => {
  // after just properties that are necessary not full object

  return (
    <div className="character-container">
      <h1>{char.name}</h1>
      <img
        className="character-img"
        src={char.thumbnail.path + "/portrait_xlarge.jpg"}
        alt=""
      />
      <Button>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          key={char.id}
          to={`/characters/${char.id}/details`}
        >
          More details{" "}
        </Link>
      </Button>
    </div>
  );
};

export default CharacterCard;
