import React from "react";

const Gift = ({ onClick = () => {} }) => {
  return (
    <div className="content-gift">
      <div className="birthday-gift">
        <div className="gift">
          <input id="click" type="checkbox" />
          <label className="click" htmlFor="click" onClick={onClick}></label>
        </div>
      </div>
    </div>
  );
};

export default Gift;
