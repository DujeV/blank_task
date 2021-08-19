import React, { useEffect, useState } from "react";
import { useCharacters } from "../../context/CharactersContext";
import "./index.scss";
import { languages } from "../../utils/index";

const Translate = () => {
  const { characters } = useCharacters();
  const [currentLanguage, setCurrentLanguage] = useState(languages[2]);
  const [translate, setTranslate] = useState(false);

  return (
    <div>
      <ul className="language-container">
        <li onClick={() => setCurrentLanguage(languages[0])}>HR</li>
        <li onClick={() => setCurrentLanguage(languages[1])}>GER</li>
        <li onClick={() => setCurrentLanguage(languages[2])}>ENG</li>
        <li onClick={() => setCurrentLanguage(languages[3])}>ESP</li>
      </ul>
      <Convert text={characters} language={currentLanguage} />
    </div>
  );
};

export default Translate;
