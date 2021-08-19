import React, { useEffect, useState, useCallback } from "react";
import { getCharacters } from "../../apis";
import Searchbar from "../../components/Searchbar";
import { useCharacters } from "../../context/CharactersContext";
import { useFavorites } from "../../context/FavoritesContext";
import CharacterCard from "../CharacterCard";
import Alert from "../../components/Alert";
import "./index.scss";

const CharacterList = () => {
  const { characters, setCharacters } = useCharacters();
  const { favorites, alert } = useFavorites();
  const [tempCharacters, setTempCharacters] = useState([]);
  const [term, setTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(20);

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
              up: false,
            };
          } else {
            return {
              ...char,
              clicked: false,
              up: false,
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

  // console.log(characters);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  return (
    <div className="characterlist-container">
      <Searchbar term={term} setTerm={setTerm} />
      <div className="alert-vh">
        {alert.show && <Alert type={alert.type} text={alert.text} />}
      </div>
      <ul className="characters-list">
        {tempCharacters?.map((char, index) => (
          <CharacterCard
            key={index}
            char={char}
            setTempCharacters={setTempCharacters}
          />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
