import React from "react";
import { Link } from "react-router-dom";
import { cr7SVG } from "../utils/image";

const Main = ({ isHome, showBG = false, children }) => {
  return (
    <div className={isHome ? "main-bg-home" : "main-bg"}>
      {showBG && (
        <div className="main-bg-content">
          <img src={cr7SVG} alt="cr7svg.svg" className="main-bg-image" />
        </div>
      )}

      {children}

      <div className="card-3">
        <div style={{zIndex: 1}}>
          <div>
            <Link to="/">INCIO</Link>
          </div>
          <div>
            <Link to="/phrase">FRASES</Link>
          </div>
          <div>
            <Link to="/date">DATE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
