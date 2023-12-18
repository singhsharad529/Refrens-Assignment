import React from "react";
import "./characterSearchBar.css";

/*
    - component to search a character by its name
    - providing a search value from search bar and executing characterSearchFun 
    - characterSearchFun defined in the Characters component
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
          placeholder="Search your character name..."
          onChange={searchValue}
        />
      </div>
    </div>
  );
};
