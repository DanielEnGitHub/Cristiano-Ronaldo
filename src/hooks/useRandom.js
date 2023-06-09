import { useState } from "react";

// generar numero aletorio
const generarNumeroAleatorio = (min, max) => {
  const numberRandom = Math.random();
  const range = numberRandom * (max - min + 1) + min;
  const number = Math.floor(range);

  return number;
};

const useRandom = (data, min, max) => {
  const [generateRandom, setTextOFF] = useState("");

  // funcion a reutilizar para generar el la data aletoria dependiendo de un array
  const genereteRandonFunc = () => {
    const number = generarNumeroAleatorio(min, max);
    setTextOFF(data[number]);
  };

  return { generateRandom, genereteRandonFunc };
};

export default useRandom;
