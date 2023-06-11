import React from "react";

const Gift = ({ onClick = () => {}, setCloseGift, setIsOpen }) => {
  return (
    <div className="content-gift">
      <div className="birthday-gift">
        <div className="gift">
          <input id="click" type="checkbox" />
          <label className="click" htmlFor="click" onClick={onClick}></label>
          <div
            style={{
              color: "white",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              height: "100%",
              position: "absolute",
              zIndex: 1,
              cursor: "pointer",
            }}
            onClick={() => {
              setCloseGift(true);
              setIsOpen(false);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
