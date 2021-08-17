import React, { useEffect, useState, useCallback } from "react";
import { getCharacters } from "../../apis";
import Searchbar from "../../components/Searchbar";
import { useCharacters } from "../../context/CharactersContext";
import { useFavorites } from "../../context/FavoritesContext";
import CharacterCard from "../CharacterCard";
import "./index.scss";

const CharacterList = () => {
  const { characters, setCharacters } = useCharacters();
  const { favorites } = useFavorites();
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
        const dataCharacters = data.data.results.map((char) => {
          const res = favorites?.find((fav) => fav.id == char.id);
          if (res) {
            return {
              ...char,
              clicked: true,
            };
          } else {
            return {
              ...char,
              clicked: false,
            };
          }
        });
        setCharacters(dataCharacters);
        // setCharacters(data.data.results);
        setTempCharacters(dataCharacters);
      });
    } else {
      setTempCharacters(findCharactersWithTerm(term));
    }
  }, [term, setCharacters, setTempCharacters, findCharactersWithTerm]);

  console.log(characters);
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
