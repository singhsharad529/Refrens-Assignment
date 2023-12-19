import { useEffect, useState } from "react";
import CharacterContext from "./charactersContext";
import { PropTypes } from "prop-types";

/*
  - This is context provider component to manage characters state.
  - Whichever Children element comes inside this provider , can consume characters state.
*/

const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharactersData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const charactersData = await response.json();
        setCharacters(charactersData.results);
      } catch (error) {
        console.log("error is ", error);
        setError("Something Went Wrong");
      }
    };

    getCharactersData();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters, error }}>
      {children}
    </CharacterContext.Provider>
  );
};

//prop type for CharacterContextProvider Component
CharacterContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CharacterContextProvider;
