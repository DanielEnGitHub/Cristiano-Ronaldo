import React from "react";
import { useToggleContext } from "../Context/Contex";

const ImageBorder = ({ imageURL, onClick = () => {}, revert = false }) => {
  const toogle = useToggleContext();
  return (
    <div className={`card-2 ${revert ? "card-2-revert" : ""}`}>
      <div className="principal">
        <div className="container">
          <div className="main" style={{ "--image-url": `url(${imageURL})` }}>
            <img src={imageURL} alt="image" className="hidden" />
          </div>
          <img
            src={imageURL}
            onClick={onClick}
            className={`imageRonaldo ${toogle ? "cursos-disabled" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBorder;
