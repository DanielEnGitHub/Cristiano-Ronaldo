import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cr7ExtraSVG } from "../../utils/image";
import ConfettiCanvas from "./ConfettiCanvas/ConfettiCanvas";
import Gift from "./Gift/Gift";

// css
import "./css/extra.css";
import "./css/confeti.css";
import "./css/gift.css";
import YouTubePlayer from "../Home/YouTubePlayer";
import useRandom from "../../hooks/useRandom";
import { videosYT } from "../../utils/Content";

const Extra = () => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const { generateRandom, genereteRandonFunc } = useRandom(videosYT, 0, 39);

  const onOpen = () => {
    setIsOpen(!isOpen);
    genereteRandonFunc();
  };

  return (
    <>
      <div className="main-extra">
        {isOpen && (
          <YouTubePlayer
            className={"reel"}
            mute={false}
            videoID={generateRandom}
          />
        )}

        {(text.toUpperCase().includes("ARIANNA") ||
          (text.toUpperCase().includes("ARI") &&
            text.toUpperCase().includes("SIU"))) && (
          <>
            <Gift onClick={onOpen} />
            <ConfettiCanvas />
          </>
        )}
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
            placeholder="Escribe algo"
          />
        </div>
      </div>
    </>
  );
};

export default Extra;
