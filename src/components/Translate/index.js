import React, { useEffect, useState } from "react";
import { useCharacters } from "../../context/CharactersContext";
import "./index.scss";
import { languages } from "../../const/index";

const Translate = () => {
  const { characters, setCharacters } = useCharacters();
  const [currentLanguage, setCurrentLanguage] = useState(languages[2].value);
  //   const [translate, setTranslate] = useState(false);

  useEffect(() => {
    // const translate = async () => {
    //   const { data } = await fetch(
    //     "https://translation.googleapis.com/language/translate/v2",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     },
    //     {
    //       params: {
    //         q: characters,
    //         target: currentLanguage,
    //         key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
    //       },
    //     }
    //   );
    const translate = async () => {
      const response = await fetch(
        "https://google-translate1.p.rapidapi.com/language/translate/v2",
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "accept-encoding": "application/gzip",
            "x-rapidapi-host": "google-translate1.p.rapidapi.com",
            "x-rapidapi-key":
              "fe9282efbbmshad3264a318c076ap187f97jsne9b8a7c68c10",
          },
          body: {
            q: characters,
            target: currentLanguage,
            source: languages[2].value,
          },
        }
      ).then((res) => console.log(res));

      return response;
    };
    translate();

    // translate();
  }, [currentLanguage, characters]);

  console.log(currentLanguage);

  return (
    <div>
      <ul className="language-container">
        <li onClick={() => setCurrentLanguage(languages[0].value)}>HR</li>
        <li onClick={() => setCurrentLanguage(languages[1].value)}>GER</li>
        <li onClick={() => setCurrentLanguage(languages[2].value)}>ENG</li>
        <li onClick={() => setCurrentLanguage(languages[3].value)}>ESP</li>
      </ul>
      {/* <Convert text={characters} language={currentLanguage} /> */}
    </div>
  );
};

export default Translate;
