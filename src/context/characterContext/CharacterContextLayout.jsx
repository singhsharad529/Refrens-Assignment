import { Outlet } from "react-router-dom";
import CharacterContextProvider from "./CharacterContextProvider";

/*
  - It is an layout which helps us to wrap components inside Character provider
  - Outlet : It is an compnent placeholder
*/

const CharacterContextLayout = () => {
  return (
    <CharacterContextProvider>
      <Outlet />
    </CharacterContextProvider>
  );
};

export default CharacterContextLayout;
