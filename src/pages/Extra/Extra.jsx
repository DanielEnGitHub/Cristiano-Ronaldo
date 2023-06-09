import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cr7ExtraSVG } from "../../utils/image";
import "./extra.css";
import "./confeti.css";
import ConfettiCanvas from "./ConfettiCanvas/ConfettiCanvas";

const Extra = () => {
  const [text, setText] = useState("");
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="main-extra">
      {(text.toUpperCase().includes("ARIANNA") ||
        (text.toUpperCase().includes("ARI") &&
          text.toUpperCase().includes("SIU"))) && <ConfettiCanvas />}
      <div className="content-link">
        <Link className={"link"} to="/">
          INICIO
        </Link>
      </div>

      <div className="content-extra">
        <div style={{ display: "block" }}>
          {text || "SIUUUUUU"} <img src={cr7ExtraSVG} alt="cr7.svg" />
        </div>
        <input
          className="text-input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Escribe cualquier cosa"
        />
      </div>
    </div>
  );
};

export default Extra;
