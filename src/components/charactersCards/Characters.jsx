import { useContext } from "react";
import "./characters.css";
import CharacterContext from "../../context/characterContext/charactersContext";
import { Link } from "react-router-dom";
/*
    - This will print all the characters with there information 
*/

export const Characters = () => {
  const data = [1, 2, 3, 4, 5, 5, 6, 6, 7];

  const { characters } = useContext(CharacterContext);

  return (
    <>
      <div className="characters-container">
        {characters &&
          characters.map((character, index) => (
            <Link id="routernavlink" key={character.id} className="card" to="#">
              <img src={character.image} alt="John" style={{ width: "100%" }} />

              <div
                className="character-info"
                style={{ textAlign: "left", margin: "0 auto", padding: "10px" }}
              >
                <h3>{character.name}</h3>
                <hr className="separation" />
                <p className="">
                  Status :{" "}
                  <span className="info-value"> {character.status}</span>
                </p>
                <p className="">
                  Location :{" "}
                  <span className="info-value">{character.location.name}</span>
                </p>
                <p className="">
                  Gender :{" "}
                  <span className="info-value">{character.gender}</span>
                </p>
                <p className="">
                  Species :{" "}
                  <span className="info-value">{character.species}</span>
                </p>
                <p className="">
                  Type :{" "}
                  <span className="info-value">
                    {character.type ? `${character.type}` : "No Type"}
                  </span>
                </p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};
