import React from "react";
import { cr7SVG } from "../utils/image";

const Main = ({ children }) => {
  return (
    <div className="main-bg">
      <div className="main-bg-content">
        <img src={cr7SVG} alt="cr7svg.svg" className="main-bg-image" />
      </div>
      <div className="card-1">
        <div className="card-1-content">
          <div className="card-1-content-1">
            <div className="cm-1">“</div>
            <hr className="hr" />
          </div>
          <span>
            Siempre me esfuerzo al máximo para superar mis propios límites y
            alcanzar la grandeza.
          </span>
          <div className="card-1-content-2">
            <hr />
            <div className="cm-2">”</div>
          </div>
        </div>
      </div>
      <div className="card-2">
        <div>{children}</div>
      </div>
      <div className="card-3">NAVIGATION</div>
    </div>
  );
};

export default Main;
