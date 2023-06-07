import React from "react";

const ImageBorder = ({ imageURL, revert = false }) => {
  return (
    <div className={`card-2 ${revert ? "card-2-revert" : ""}`} style={{position: "relative"}}>
      <div className="principal">
        <div className="container" >
          <div className="main" style={{ "--image-url": `url(${imageURL})` }}>
            <img src={imageURL} alt="image" className="hidden" />
          </div>
          <img src={imageURL} className="imageRonaldo" />
        </div>
      </div>
    </div>
  );
};

export default ImageBorder;
