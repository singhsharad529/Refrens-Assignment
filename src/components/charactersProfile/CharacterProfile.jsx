import { useContext, useEffect, useState } from "react";
import CharacterContext from "../../context/characterContext/charactersContext";
import './characterProfile.css';
import { useParams } from "react-router-dom";
import { EpisodeRender } from "../../screens/EpisodeRender";
import { EpisodeContextProvider } from "../../context/episodeContext/EpisodeContextProvider";



export const CharacterProfile = () => {
  const [character,setCharacter]=useState(null);
  const { characters } = useContext(CharacterContext);
  const {id}=useParams();

  useEffect(() => {
    const characterData=characters.filter((char)=>char.id==id);
        setCharacter(characterData[0]);
    }, [characters]);

  return (
    <>
    {character && (<div className="character-container container">
     
      <div className="container-1">
        <div className="character-col-1">
          <img src={character.image} alt="" width="100%"/>
        </div>
        <div className="character-col-2">
          <div className="characterheading">
            <h1>{character.name}</h1>
            <hr className="character-heading-hr" />
          </div>
          <div className="character-details">
            <div className="character-status character-details-child">
              <h3>Status</h3>
              <h5>{character.status}</h5>
            </div>
            <div className="character-details-child">
            <h3>Gender</h3>
              <h5>{character.gender}</h5>
            </div>
            <div className="character-species character-details-child">
            <h3>Species</h3>
              <h5>{character.species}</h5>
            </div>
            <div className="character-type character-details-child">
            <h3>Type</h3>
              <h5>{character.type ? `${character.type}` : "No Type"}</h5>
            </div>
            <div className="character-location character-details-child">
            <h3>Location</h3>
              <h5>{character.location.name}</h5>
            </div>
            <div className="character-location character-details-child">
            <h3>Location</h3>
              <h5>{character.location.name}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-3">
        <h2>Episodes</h2>
        <hr className="character-heading-hr" />
        {/* <div className="episodes">
          {
            character && character.episode.map((ep,index)=>{

              const episodeVal=ep.split("/");

              return (<p key={index}><a className="episode-a" href={ep} target="_blank">Episode {episodeVal[episodeVal.length-1]}</a></p>)
            })
          }
          
        </div> */}
        <EpisodeContextProvider>
        <EpisodeRender character={character}/>
        </EpisodeContextProvider>
        
      </div>
    </div>)}
    </>
  );
};
