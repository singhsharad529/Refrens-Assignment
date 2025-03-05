import "./App.css";
import { Header } from "./components/header/Header";
import { Characters } from "./components/charactersCards/Characters";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Locations } from "./components/locationCards/Locations";
import { Episodes } from "./components/episodesCards/Episodes";
import CharacterContextLayout from "./context/characterContext/CharacterContextLayout";
import { CharacterProfile } from "./components/charactersProfile/CharacterProfile";
import { TestComponent } from "./components/testcomponent/TestComponent";
import ReactGA from "react-ga4";
import { useEffect } from "react";
/*
  - Main component 
  - Contains routes by using react-router-dom
  
*/

ReactGA.initialize("G-9FBWEF45LV");

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]); // ✅ Correct dependency

  return null; // This component doesn't render anything
}

function App() {
  return (
    <>
      <Router>
        <AnalyticsTracker /> {/* ✅ Ensures GA tracks page views correctly */}
        <Header />
        <div className="middle-section">
          <Routes>
            <Route path="/" element={<Navigate to="/characters" />} />
            {/*
                - Character and Character Profile are wrapped under Character provider.
                - CharacterContextLayout is a character provider which gives a layout.
                - This Layout helps us to wrap components inside context provider
              */}
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
            <Route exact path="/test-route" element={<TestComponent />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
