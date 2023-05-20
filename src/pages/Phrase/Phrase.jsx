import React from "react";
import { ronaldoJV } from "../../utils/image";

const Phrase = () => {
  return (
    <>
      {/* <div className="main">
        <div className="imagesRonaldo">
          <img src={ronaldoJV} alt="ronaldojv.png" />
        </div>
      </div> */}
      <div className="principal">

      <div className="container">
        <div className="main">
          <img src={ronaldoJV} alt="ronaldojv.png" className="hidden" />
        </div>
        <img src={ronaldoJV} className="imageRonaldo" />
      </div>
      </div>

      {/* <img src={ronaldoJV} alt="ronaldojv.png" /> */}
      {/* <span className="imagesRonaldo">HOLA</span> */}
    </>
  );
};

export default Phrase;
