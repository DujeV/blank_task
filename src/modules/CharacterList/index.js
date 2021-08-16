import React, { useEffect, useState, useCallback } from "react";
import { getCharacters } from "../../apis";
import Searchbar from "../../components/Searchbar";
import { useCharacters } from "../../context/CharactersContext";
import CharacterCard from "../CharacterCard";
import "./index.scss";

const CharacterList = () => {
  const { characters, setCharacters } = useCharacters();
  const [tempCharacters, setTempCharacters] = useState([]);
  const [term, setTerm] = useState("");

  const findCharactersWithTerm = useCallback(
    (term) => {
      return characters?.filter((char) =>
        char.name.toUpperCase().includes(term.toUpperCase())
      );
    },
    [term]
  );

  useEffect(() => {
    if (term === "") {
      getCharacters().then((data) => {
        console.log(data);
        setCharacters(data.data.results);
        setTempCharacters(data.data.results);
      });
    } else {
      setTempCharacters(findCharactersWithTerm(term));
    }
  }, [term, setCharacters, setTempCharacters, findCharactersWithTerm]);

  return (
    <div>
      <Searchbar term={term} setTerm={setTerm} />
      <ul className="characters-list">
        {tempCharacters?.map((char, index) => (
          <CharacterCard key={index} char={char} />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
