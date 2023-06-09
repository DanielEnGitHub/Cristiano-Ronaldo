import React from "react";
import ImageBorder from "../../components/ImageBorder/ImageBorder";
import PhraseComponent from "../../components/PhraseComponent";
import { cr7_8 } from "../../utils/image";
import useOpenai from "../../hooks/useOpenai";
import {
  useApiErrorContext,
  useToggleContext,
} from "../../components/Context/Contex";
import useRandom from "../../hooks/useRandom";
import { phrases } from "../../utils/Content";

const Phrase = () => {
  const { generateRandom, genereteRandonFunc } = useRandom(phrases, 1, 50);
  const apiError = useApiErrorContext();

  const { text, getResponse } = useOpenai(
    "Dime una frase de Cristiano Ronaldo."
  );
  const toogle = useToggleContext();

  const textDefault =
    "Siempre me esfuerzo al máximo para superar mis propios límites y alcanzar la grandeza.";

  return (
    <>
      <PhraseComponent
        text={apiError ? generateRandom || textDefault : text || textDefault}
        isPhrase
      />
      <ImageBorder
        imageURL={cr7_8}
        onClick={
          apiError ? genereteRandonFunc : toogle ? () => {} : getResponse
        }
      />
    </>
  );
};

export default Phrase;
