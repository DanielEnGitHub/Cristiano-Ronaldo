import React from "react";
import { useToggleContext } from "../Context/Contex";
import MexicanWave from "../Loader";

const Phrase = ({ text, isPhrase = false, revert = false }) => {
  const toogle = useToggleContext();
  return (
    <>
      <div className="card-1">
        <div
          className={`card-1-content ${revert && "card-1-content-revert"}`}
          style={{ filter: "blur(0px)" }}
        >
          {toogle && <MexicanWave />}
          <div className={toogle ? "blur" : ""}>
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
      </div>
    </>
  );
};

export default Phrase;
