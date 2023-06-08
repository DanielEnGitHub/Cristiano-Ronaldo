import React from "react";
import ImageBorder from "../../components/ImageBorder/ImageBorder";
import PhraseComponent from "../../components/PhraseComponent";
import useOpenai from "../../hooks/useOpenai";
import { cr7_4 } from "../../utils/image";

const Date = () => {
  const { text, getResponse } = useOpenai("Dime un dato de Cristiano Ronaldo.");
  return (
    <>
      <ImageBorder imageURL={cr7_4} onClick={getResponse} revert />
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
