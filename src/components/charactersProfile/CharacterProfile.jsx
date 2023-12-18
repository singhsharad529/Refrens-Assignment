import { useContext } from "react";
import CharacterContext from "../../context/characterContext/charactersContext";

export const CharacterProfile = () => {
  const { characters } = useContext(CharacterContext);
  //   console.log(characters);
  return <div>this is profile</div>;
};
