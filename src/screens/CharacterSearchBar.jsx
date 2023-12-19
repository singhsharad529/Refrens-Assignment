import "./characterSearchBar.css";
import { PropTypes } from "prop-types";

/*
    - Component to search a character by its name.
    - Providing a search value from search bar and executing characterSearchFun.
    - CharacterSearchFun defined in the Characters component.
*/

export const CharacterSearchBar = (props) => {
  const searchValue = (event) => {
    if (props.characterSearchFun) {
      props.characterSearchFun(event.target.value);
    }
  };

  return (
    <div className="home-search-div">
      <div className="category-search">
        <input
          type="text"
          placeholder="Search your character by name..."
          onChange={searchValue}
        />
      </div>
    </div>
  );
};

//prop type for CharacterSearchBar Component
CharacterSearchBar.propTypes = {
  characterSearchFun: PropTypes.func,
};
