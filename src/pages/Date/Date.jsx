import React from "react";
import {
  useApiErrorContext,
  useToggleContext,
} from "../../components/Context/Contex";
import ImageBorder from "../../components/ImageBorder/ImageBorder";
import PhraseComponent from "../../components/PhraseComponent";
import useOpenai from "../../hooks/useOpenai";
import useRandom from "../../hooks/useRandom";
import { information } from "../../utils/Content";
import { cr7_4 } from "../../utils/image";

const Date = () => {
  const { generateRandom, genereteRandonFunc } = useRandom(information, 1, 20);
  const apiError = useApiErrorContext();

  const { text, getResponse } = useOpenai("Dime un dato de Cristiano Ronaldo.");
  const toogle = useToggleContext();

  const textDefault =
    "Cristiano Ronaldo nació el 5 de febrero de 1985 en Funchal, Madeira, Portugal. Desde muy joven mostró un gran talento para el fútbol y comenzó su carrera en el club local, el Sporting de Lisboa.";

  return (
    <>
      <ImageBorder
        imageURL={cr7_4}
        onClick={
          apiError ? genereteRandonFunc : toogle ? () => {} : getResponse
        }
        revert
      />
      <PhraseComponent
        text={apiError ? generateRandom || textDefault : text || textDefault}
        revert
      />
    </>
  );
};

export default Date;
