import { useContext, useState } from "react";
import "./characters.css";
import CharacterContext from "../../context/characterContext/charactersContext";
import { Link } from "react-router-dom";
import { CharacterSearchBar } from "../../screens/CharacterSearchBar";
import { CharacterFilterBar } from "../../screens/CharacterFilterBar";
import { PrintMsg } from "../../screens/PrintMsg";

/*
    - This will print all the characters with there information 
    - The rendering will be happend with sorting logics 
    - e.g: filtering based on parameters or search by name
*/

export const Characters = () => {
  const [searchName, setsearchName] = useState("");
  const [filterOptions, setfilterOptions] = useState({
    status: "",
    gender: "",
    species: "",
    type: "",
  });
  const { characters, error } = useContext(CharacterContext);
  console.log(error);
  const characterSearchFun = (msg) => {
    setsearchName(msg);
  };

  return (
    <>
      <div>
        <CharacterFilterBar />
      </div>
      <div>
        <CharacterSearchBar characterSearchFun={characterSearchFun} />
      </div>
      <div className="characters-container container">
        {/* rendering characters data */}
        {characters &&
          characters
            .filter((filteredName) =>
              filteredName.name.toLowerCase().includes(searchName.toLowerCase())
            )
            .map((character, index) => (
              <Link
                id="routernavlink"
                key={character.id}
                className="card"
                to="#"
              >
                <img
                  className="character-img"
                  src={character.image}
                  alt="John"
                />

                <div
                  className="character-info"
                  style={{
                    textAlign: "left",
                    margin: "0 auto",
                    padding: "10px",
                  }}
                >
                  <h3>{character.name}</h3>
                  <hr className="separation" />
                  <p className="">
                    Status :{" "}
                    <span className="info-value"> {character.status}</span>
                  </p>
                  <p className="">
                    Location :{" "}
                    <span className="info-value">
                      {character.location.name}
                    </span>
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

        {/* when no match found */}
        {!error &&
          searchName &&
          characters &&
          characters.filter((filteredName) =>
            filteredName.name.toLowerCase().includes(searchName.toLowerCase())
          ).length === 0 && <PrintMsg msg={"notmatched"}>Not Matched</PrintMsg>}

        {/* when an error occured */}
        {error && <PrintMsg msg={"error"}>{error}</PrintMsg>}
      </div>
    </>
  );
};
