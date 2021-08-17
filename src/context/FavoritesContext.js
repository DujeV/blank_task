import React, { createContext, useContext, useState, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const useFavorites = () => {
  const favoritesContext = useContext(FavoritesContext);

  if (favoritesContext === undefined) {
    throw new Error("useFavorites must be used within a FavoritesContext");
  }

  return favoritesContext;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [alert, setAlert] = useState({ show: false });

  const handleAlert = useCallback(
    ({ type, text }) => {
      setAlert({ show: true, type, text }); //type:type,text:text
      setTimeout(() => {
        setAlert({ show: false });
      }, 1000);
    },
    [setAlert]
  );

  const addFavorite = (character) => {
    const newFavorite = {
      id: character.id,
      name: character.name,
    };

    setFavorites([...favorites, newFavorite]);
  };

  const removeFavorite = (character) => {
    const filteredCharacters = favorites.filter(
      (char) => char.id != character.id
    );
    setFavorites(filteredCharacters);
  };

  const value = {
    favorites,
    alert,
    handleAlert,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
