import React, { useContext, createContext, useState } from "react";

const CharactersContext = createContext();

export const useCharacters = () => {
  const characterContext = useContext(CharactersContext);

  if (characterContext === undefined) {
    throw new Error("useCharacters must be used within a CharactersProvider");
  }

  return characterContext;
};

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]); // prev useLocalStorage

  const findCharacter = (id) => {
    return characters.find((char) => char.id == id);
  };

  const value = {
    characters,
    setCharacters,
    findCharacter,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
