import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.scss";
import { CaretDown, CaretUp, Star, StarFilled } from "../../assets/icons";
import { useFavorites } from "../../context/FavoritesContext";
import CharacterImage from "../../components/CharacterImage";
import { useCharacters } from "../../context/CharactersContext";

const CharacterCard = ({ char, setTempCharacters }) => {
  // after just properties that are necessary not full object
  const { addFavorite, removeFavorite, handleAlert } = useFavorites();
  const { characters } = useCharacters();

  const handleAdd = (char) => {
    char.clicked = !char.clicked;
    if (char.clicked) {
      addFavorite(char);
      handleAlert({ type: "success", text: "Character added to favorites" });
    } else {
      removeFavorite(char);
      handleAlert({ type: "danger", text: "Character removed from favorites" });
    }
  };

  const handleCaret = (char) => {
    setTempCharacters(
      characters.map((character) => {
        if (character.id == char.id) {
          return {
            ...char,
            up: !char.up,
          };
        }
        return character;
      })
    );
  };

  return (
    <div className="character-container">
      <h1 className="character-heading">{char.name}</h1>
      <CharacterImage path={char.thumbnail.path} className="char-image" />
      <Button>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          key={char.id}
          to={`/characters/${char.id}/details`}
        >
          More details{" "}
        </Link>
      </Button>
      <div className="star-container">
        {!char.clicked ? (
          <Star onClick={() => handleAdd(char)} />
        ) : (
          <StarFilled onClick={() => handleAdd(char)} />
        )}
      </div>
      <h3>Events...</h3>
      <span className="caret" onClick={() => handleCaret(char)}>
        {!char.up ? <CaretDown /> : <CaretUp />}
      </span>
      {char.up ? (
        <ul className="character-events">
          {char.events.items?.map((item) => (
            <li className="event-item">{item.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default CharacterCard;
