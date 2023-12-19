import React, { useEffect, useState } from "react";
import EpisodeContext from "./episodeContext";


/*
  - This is context provider component to manage characters state
  - Whichever Children element comes inside this provider , will get characters state
*/

export const EpisodeContextProvider = ({ children }) => {
  const [episodes, setEpisodes] = useState([]);
  const [episodeError, setepisodeError] = useState(null);

  useEffect(() => {
    const getCharactersData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/episode/"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const episodeData = await response.json();
        setEpisodes(episodeData.results);
      } catch (error) {
        console.log("error is ", error);
        setepisodeError("Something Went Wrong");
      }
    };

    getCharactersData();
  }, []);

  return (
    <EpisodeContext.Provider value={{ episodes, setEpisodes, episodeError }}>
      {children}
    </EpisodeContext.Provider>
  );
};

