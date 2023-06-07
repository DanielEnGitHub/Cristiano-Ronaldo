import React from "react";
import ImageBorder from "../../components/ImageBorder/ImageBorder";
import PhraseComponent from "../../components/PhraseComponent";
import { cr7_8 } from "../../utils/image";

const Phrase = () => {
  return (
    <>
      <PhraseComponent
        text={
          "Siempre me esfuerzo al máximo para superar mis propios límites y alcanzar la grandeza."
        }
        isPhrase
      />
      <ImageBorder imageURL={cr7_8} />
    </>
  );
};

export default Phrase;
