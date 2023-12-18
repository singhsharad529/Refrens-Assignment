import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Characters } from "./components/charactersCards/Characters";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Locations } from "./components/locationCards/Locations";
import { Episodes } from "./components/episodesCards/Episodes";
import CharacterContextLayout from "./context/characterContext/CharacterContextLayout";
import { CharacterProfile } from "./components/charactersProfile/CharacterProfile";

/*
  - Main component 
  - Contains routes by using react-router-dom
  
*/

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="middle-section">
          <Routes>
            <Route path="/" element={<Navigate to="/characters" />} />
            <Route element={<CharacterContextLayout />}>
              <Route exact path="/characters" element={<Characters />} />
              <Route
                exact
                path="/characters/:id"
                element={<CharacterProfile />}
              />
            </Route>
            <Route exact path="/episodes" element={<Episodes />} />
            <Route exact path="/locations" element={<Locations />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
