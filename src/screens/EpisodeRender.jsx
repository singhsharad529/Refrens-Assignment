import { useContext, useEffect, useState } from "react";
import EpisodeContext from "../context/episodeContext/episodeContext";
import { PrintMsg } from "./PrintMsg";
import { PropTypes } from "prop-types";

/*
  - This is a screen component which only renders all the episodes name.
  - It render all the episodes that belongs to a perticula character.
  - It consumes all the episodes details from episodes context.
  - Then extract all the episodes of a given character by its id
*/

export const EpisodeRender = ({ character }) => {
  const [episodesName, setEpisodesName] = useState([]);
  const { episodes } = useContext(EpisodeContext);

  useEffect(() => {
    const allEpisodeId = character.episode.map((episode) => {
      const episodeVal = episode.split("/");
      return episodeVal[episodeVal.length - 1];
    });

    const allEpisodeNames = [];
    episodes.map((episode) => {
      // console.log(episode);
      if (allEpisodeId.includes(String(episode.id)))
        allEpisodeNames.push(episode.name);
    });
    setEpisodesName(allEpisodeNames);
  }, [episodes, character]);

  return (
    <div className="episodes">
      {episodesName.length != 0 &&
        episodesName.map((ep, index) => {
          return (
            <p key={index}>
              <a className="episode-a" href="#">
                {ep}
              </a>
            </p>
          );
        })}
      {episodesName.length == 0 && (
        <PrintMsg msg={"no-episode"}>No Episode Found</PrintMsg>
      )}
    </div>
  );
};

//prop type for EpisodeRender Component
EpisodeRender.propTypes = {
  character: PropTypes.object,
};
