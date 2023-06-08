import React from "react";
import {
  useSetToggleContext,
  useToggleContext,
} from "../../components/Context/Contex";
import ImageBorder from "../../components/ImageBorder/ImageBorder";
import PhraseComponent from "../../components/PhraseComponent";
import useOpenai from "../../hooks/useOpenai";
import { cr7_4 } from "../../utils/image";

const Date = () => {
  const { text, getResponse } = useOpenai("Dime un dato de Cristiano Ronaldo.");
  const toogle = useToggleContext();

  return (
    <>
      <ImageBorder
        imageURL={cr7_4}
        onClick={toogle ? () => {} : getResponse}
        revert
      />
      <PhraseComponent
        text={
          text ||
          "Cristiano Ronaldo nació el 5 de febrero de 1985 en Funchal, Madeira, Portugal. Desde muy joven mostró un gran talento para el fútbol y comenzó su carrera en el club local, el Sporting de Lisboa."
        }
        revert
      />
    </>
  );
};

export default Date;
