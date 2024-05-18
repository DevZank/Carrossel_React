import React, { useState } from "react";
import "./Carrossel.css";
import imagem1 from "../assets/imagem1.jpg";
import imagem2 from "../assets/imagem2.jpg";
import imagem3 from "../assets/imagem3.jpg";
import imagem4 from "../assets/imagem4.jpg";
import imagem5 from "../assets/imagem5.jpg";
import imagem6 from "../assets/imagem6.jpg";
import imagem7 from "../assets/imagem7.jpg";
import imagem8 from "../assets/imagem8.jpg";
import imagem9 from "../assets/imagem9.jpg";
import imagem10 from "../assets/imagem10.jpg";

function Carrossel() {
  const [imagem, setImagem] = useState(1);
  const [transicao, setTransicao] = useState(false);

  const changeImage = (newImage) => {
    setTransicao(true);
    setTimeout(() => {
      setImagem(newImage);
      setTransicao(false);
    }, 500);
  };

  const Anterior = () => {
    changeImage(imagem < 10 ? imagem + 1 : 1);
  };

  const Proxima = () => {
    changeImage(imagem > 1 ? imagem - 1 : 10);
  };

  const imagens = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    imagem7,
    imagem8,
    imagem9,
    imagem10,
  ];

  return (
    <div className="CarrosselContainer">
      <h2>Carrossel de Imagens</h2>
      <img
        className={`imagemCarrossel ${transicao ? "fade" : ""}`}
        src={imagens[imagem - 1]}
      />
      <div className="Buttons">
        <button className="Ant" onClick={Anterior}>
          <i className="ri-arrow-left-s-fill"></i>
        </button>
        <button className="Prox" onClick={Proxima}>
          <i className="ri-arrow-right-s-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Carrossel;
