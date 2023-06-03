import React from "react";

const Phrase = ({ text, isPhrase = false, revert = false }) => {
  return (
    <>
      <div className="card-1">
        <div className={`card-1-content ${revert && "card-1-content-revert"}`}>
          <div className="card-1-content-1">
            {isPhrase && <div className="cm-1">“</div>}
            <hr className="hr" />
          </div>

          <span>{text}</span>

          <div className="card-1-content-2">
            <hr />
            {isPhrase && <div className="cm-2">”</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Phrase;
