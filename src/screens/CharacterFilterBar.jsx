import "./CharacterFilterBar.css";
import { PropTypes } from "prop-types";

/*
  - Character Filter Bar component.
  - It rendered all the filter options for a character filter.
  - It change filter value.
  - Based on these filter value the characters got filtered.
*/

export const CharacterFilterBar = (props) => {
  const setFilterOptionsForCharacters = (e) => {
    props.filterOptionsFun(e);
  };

  return (
    <div className="container">
      <div className="filter-container">
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Filter By :
        </label>
        <div className="select-container">
          <div>
            <select
              name="gender"
              id=""
              onChange={setFilterOptionsForCharacters}
            >
              <option value="" default>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <select
              name="status"
              id=""
              onChange={setFilterOptionsForCharacters}
            >
              <option value="" default>
                Status
              </option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div>
            <select
              name="species"
              id=""
              onChange={setFilterOptionsForCharacters}
            >
              <option value="" default>
                Species
              </option>
              <option value="human">Human</option>
              <option value="alien">Alien</option>
            </select>
          </div>
          <div>
            <select name="type" id="" onChange={setFilterOptionsForCharacters}>
              <option value="" default>
                Type
              </option>
              <option value="no type">No Type</option>
              <option value="Genetic Experiment">Genetic Experiment</option>
              <option value="Superhuman">Superhuman</option>
              <option value="Human with Antennae">Human with Antennae</option>
              <option value="Parasite">Parasite</option>
              <option value="Human with ants in his eyes">
                Human with ants in his eyes
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

//prop type for CharacterFilterBar Component
CharacterFilterBar.propTypes = {
  filterOptionsFun: PropTypes.func,
};
