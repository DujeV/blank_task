import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCharacters } from "../../context/CharactersContext";
import "./index.scss";

const CharacterDetails = () => {
  const { findCharacter } = useCharacters();
  const { id } = useParams();
  const char = useMemo(() => findCharacter(id), [id, findCharacter]);

  return (
    <div className="characterdetails">
      <p>{char?.modified}</p>
      <div></div>
    </div>
  );
};

export default CharacterDetails;
