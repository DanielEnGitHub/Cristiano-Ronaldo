import React from "react";
import useRandom from "../../hooks/useRandom";
import { images } from "../../utils/Content";
import { useToggleContext } from "../Context/Contex";

const ImageBorder = ({ imageURL, onClick = () => {}, revert = false }) => {
  const toogle = useToggleContext();
  const { generateRandom, genereteRandonFunc } = useRandom(images, 1, 6);
  const imageRandom = generateRandom || imageURL;

  return (
    <div className={`card-2 ${revert ? "card-2-revert" : ""}`}>
      <div className="principal">
        <div className="container">
          <div
            className="main"
            style={{ "--image-url": `url(${imageRandom})` }}
          >
            <img src={imageRandom} alt="image" className="hidden" />
          </div>
          <img
            src={imageRandom}
            onClick={() => {
              onClick();
              genereteRandonFunc();
            }}
            className={`imageRonaldo ${toogle ? "cursos-disabled" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBorder;
