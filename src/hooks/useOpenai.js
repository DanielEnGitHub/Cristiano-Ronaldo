import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSetToggleContext } from "../components/Context/Contex";

const baseURL = "https://api.openai.com/v1/chat/completions";
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const model = "gpt-3.5-turbo";
const temperature = 0.6; // Configura la temperatura aquí

const useOpenai = (question) => {
  const [text, setText] = useState("");
  const setToggle = useSetToggleContext();

  async function generarRespuesta() {
    try {
      setToggle(true);
      const response = await axios.post(
        baseURL,
        {
          model,
          messages: [
            { role: "system", content: "Tu eres Cristiano Ronaldo." },
            { role: "user", content: question },
          ],
          temperature, // Incluye el parámetro de temperatura en la solicitud
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      // Obtener la respuesta del modelo
      const responseModel = response.data.choices[0].message.content;
      return responseModel;
    } catch (error) {
      console.error("Error al hacer la solicitud a la API de ChatGPT:", error);
      throw error;
    }
  }

  const getResponse = () => {
    generarRespuesta()
      .then((responseModel) => {
        setText(responseModel);
      })
      .catch((error) => {
        toast.error(error.response.data.error.message || "Error");
        console.log("hola", error);
      })
      .finally(() => {
        setToggle(false);
      });
  };

  return { text, getResponse };
};

export default useOpenai;
