import React from "react";
import ImageBorder from "../../components/ImageBorder/ImageBorder";
import PhraseComponent from "../../components/PhraseComponent";
import { cr7_8 } from "../../utils/image";
import useOpenai from "../../hooks/useOpenai";

const Phrase = () => {
  const { text, getResponse } = useOpenai(
    "Dime una frase de Cristiano Ronaldo."
  );

  return (
    <>
      <PhraseComponent
        text={
          text ||
          "Siempre me esfuerzo al máximo para superar mis propios límites y alcanzar la grandeza."
        }
        isPhrase
      />
      <ImageBorder imageURL={cr7_8} onClick={getResponse} />
    </>
  );
};

export default Phrase;
