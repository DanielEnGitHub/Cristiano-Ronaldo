import React from "react";
import { cr7SVG } from "../utils/image";

const Main = ({ children }) => {
  return (
    <div className="main-bg">
      <div className="main-bg-content">
        <img src={cr7SVG} alt="cr7svg.svg" className="main-bg-image" />
      </div>

      {children}
    </div>
  );
};

export default Main;
