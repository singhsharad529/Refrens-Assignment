import { Link, NavLink } from "react-router-dom";
import "./header.css";

/*
    - Header Component
*/

export const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li>
                <NavLink
                  to="/characters"
                  className={({ isActive }) =>
                    isActive ? "header-active" : ""
                  }
                >
                  Characters
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/locations"
                  className={({ isActive }) =>
                    isActive ? "header-active" : ""
                  }
                >
                  Locations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/episodes"
                  className={({ isActive }) =>
                    isActive ? "header-active" : ""
                  }
                >
                  Episodes
                </NavLink>
              </li>
            </ul>
            <h1 className="logo">
              Refrens<sup className="logo-subheading">Assignment</sup>
            </h1>
          </div>
        </nav>
      </div>
    </>
  );
};
