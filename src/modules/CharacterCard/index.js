import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CharacterCard = ({ char }) => {
  // after just properties that are necessary not full object

  return (
    <div>
      <h1>{char.name}</h1>
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
