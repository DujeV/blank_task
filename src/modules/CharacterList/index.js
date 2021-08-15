import React, { useEffect, useState } from "react";
import { getCharacters } from "../../apis";
import { useCharacters } from "../../context/CharactersContext";
import CharacterCard from "../CharacterCard";
import "./index.css";

const CharacterList = () => {
  const { characters, setCharacters } = useCharacters();

  useEffect(() => {
    getCharacters().then((data) => {
      console.log(data);
      setCharacters(data.data.results);
    });
  }, []);

  return (
    <div>
      <ul>
        {characters?.map((char, index) => (
          <CharacterCard key={index} char={char} />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
