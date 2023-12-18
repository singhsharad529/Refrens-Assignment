import React, { useEffect, useState } from "react";
import CharacterContext from "./charactersContext";

const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharactersData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const charactersData = await response.json();
        setCharacters(charactersData.results);
      } catch (error) {
        setError(error.message);
      }
    };

    getCharactersData();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
