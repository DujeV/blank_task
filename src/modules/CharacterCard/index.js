import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.scss";
import { Star, StarFilled } from "../../assets/icons";
import { useFavorites } from "../../context/FavoritesContext";

const CharacterCard = ({ char }) => {
  // after just properties that are necessary not full object
  const { addFavorite, removeFavorite } = useFavorites();

  const handleAdd = (char) => {
    char.clicked = !char.clicked;
    if (char.clicked) {
      addFavorite(char);
    } else {
      removeFavorite(char);
    }
  };

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
      <div className="star-container">
        {!char.clicked ? (
          <Star onClick={() => handleAdd(char)} />
        ) : (
          <StarFilled onClick={() => handleAdd(char)} />
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
