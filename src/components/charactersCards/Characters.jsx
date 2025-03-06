import { useContext, useState } from "react";
import "./characters.css";
import CharacterContext from "../../context/characterContext/charactersContext";
import { Link } from "react-router-dom";
import { CharacterSearchBar } from "../../screens/CharacterSearchBar";
import { CharacterFilterBar } from "../../screens/CharacterFilterBar";
import { PrintMsg } from "../../screens/PrintMsg";
import ReactGA from "react-ga4";
/*
    - This will print all the characters with there information.
    - The rendering will be happend with sorting logics.
    - e.g: filtering based on parameters or search by name.
*/

export const Characters = () => {
  // state to set name to search by name
  const [searchName, setsearchName] = useState("");
  // state to store all filter options
  const [filterOptions, setfilterOptions] = useState({
    status: "",
    gender: "",
    species: "",
    type: "",
  });

  const { characters, error } = useContext(CharacterContext);

  // function to set search name
  const characterSearchFun = (msg) => {
    setsearchName(msg);
  };

  // function to set all filter options
  const filterOptionsFun = (e) => {
    // console.log(e.target.name,' ',e.target.value);
    setfilterOptions((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(filterOptions);
  };

  const testAnalytics = () => {
    ReactGA.event({
      category: "Submitting Form 1",
      action: "testing analytics four",
      label: "optional lable", // optional
    });

    console.log("analytics testing");

    return;
  };

  const testAnalytics2 = () => {
    ReactGA.event({
      category: "Submitting Form 1",
      action: "testing analytics five",
      label: "optional lable", // optional
    });

    console.log("analytics testing 2");

    return;
  };

  return (
    <>
      <div>
        <CharacterFilterBar filterOptionsFun={filterOptionsFun} />
      </div>
      <div>
        <CharacterSearchBar characterSearchFun={characterSearchFun} />
      </div>
      <div className="characters-container container">
        {/* rendering characters data */}
        {characters &&
          characters
            .filter(
              (characterForFilter) =>
                characterForFilter.name
                  .toLowerCase()
                  .includes(searchName.toLowerCase()) &&
                (filterOptions.gender == "" ||
                  characterForFilter.gender.toLowerCase() ==
                    filterOptions.gender.toLowerCase()) &&
                (filterOptions.status == "" ||
                  characterForFilter.status.toLowerCase() ==
                    filterOptions.status.toLowerCase()) &&
                (filterOptions.species == "" ||
                  characterForFilter.species.toLowerCase() ==
                    filterOptions.species.toLowerCase()) &&
                (filterOptions.type == "" ||
                  characterForFilter.type.toLowerCase() ==
                    filterOptions.type.toLowerCase())
            )
            .map((character) => (
              <Link
                id="routernavlink"
                key={character.id}
                className="card"
                to={`/characters/${character.id}`}
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
                    padding: "17px",
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
          characters.filter(
            (characterForFilter) =>
              characterForFilter.name
                .toLowerCase()
                .includes(searchName.toLowerCase()) &&
              (filterOptions.gender == "" ||
                characterForFilter.gender.toLowerCase() ==
                  filterOptions.gender.toLowerCase()) &&
              (filterOptions.status == "" ||
                characterForFilter.status.toLowerCase() ==
                  filterOptions.status.toLowerCase()) &&
              (filterOptions.species == "" ||
                characterForFilter.species.toLowerCase() ==
                  filterOptions.species.toLowerCase()) &&
              (filterOptions.type == "" ||
                characterForFilter.type.toLowerCase() ==
                  filterOptions.type.toLowerCase())
          ).length === 0 && <PrintMsg msg={"message"}>Not Matched</PrintMsg>}

        {/* when an error occured */}
        {error && <PrintMsg msg={"error"}>{error}</PrintMsg>}
      </div>

      <button onClick={testAnalytics}>Testing Analytics</button>
      <button onClick={testAnalytics2}>Testing Analytics 2</button>
    </>
  );
};
