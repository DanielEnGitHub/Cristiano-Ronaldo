import React from "react";
import { Link } from "react-router-dom";
import { cr7SVG } from "../utils/image";

const Main = ({ isHome, showBG = false, children }) => {
  const { hash } = window.location;

  const pathInformation = hash.includes("#/information");
  const pathPhrase = hash.includes("#/phrase");
  const pathExtra = hash.includes("#/extra");

  return (
    <div className={isHome ? "main-bg-home" : "main-bg"}>
      {showBG && (
        <div className="main-bg-content">
          <img src={cr7SVG} alt="cr7svg.svg" className="main-bg-image" />
        </div>
      )}
      {children}

      <div className="card-3">
        <div className="card-3-content" style={{ zIndex: 1 }}>
          <Link
            className={
              !pathInformation && !pathPhrase && !pathExtra
                ? "navigation-active"
                : ""
            }
            to="/"
          >
            INCIO
          </Link>
          <Link
            className={pathInformation ? "navigation-active" : ""}
            to="/information"
          >
            DATOS
          </Link>
          <Link className={pathPhrase ? "navigation-active" : ""} to="/phrase">
            FRASES
          </Link>
          <Link className={pathExtra ? "navigation-active" : ""} to="/extra">
            EXTRA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
