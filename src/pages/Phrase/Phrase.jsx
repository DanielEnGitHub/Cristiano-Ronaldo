import React from "react";
import ImageBorder from "../../components/ImageBorder/ImageBorder";
import PhraseComponent from "../../components/PhraseComponent";
import { cr7_3 } from "../../utils/image";

const Phrase = () => {
  return (
    <>
      <PhraseComponent
        text={
          "Siempre me esfuerzo al máximo para superar mis propios límites y alcanzar la grandeza."
        }
        isPhrase
      />
      <ImageBorder imageURL={cr7_3} />
    </>
  );
};

export default Phrase;
