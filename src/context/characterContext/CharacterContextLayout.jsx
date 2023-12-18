import { Outlet } from "react-router-dom";
import CharacterContextProvider from "./CharacterContextProvider";

const CharacterContextLayout = () => {
  return (
    <CharacterContextProvider>
      <Outlet />
    </CharacterContextProvider>
  );
};

export default CharacterContextLayout;
