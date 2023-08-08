import React, { useRef } from "react";

import style from "./Carrossel.module.scss";
import seta from "./Arrow-icon.svg";
import CardCarrossel from "./CardCarrossel";

const Carrossel = ({ data }) => {
  const carrosel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth - 60;
  };
  const handleRigthClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft += carrosel.current.offsetWidth - 60;
  };
  return (
    <div className={style.carrosel__conteiner}>
      <button className={style.btn__left} onClick={handleLeftClick}>
        <img src={seta} alt="Seta para a esquerda" />
      </button>
      <ul className={style.carrossel} ref={carrosel}>
        {data.map((produto) => {
          return (
            <CardCarrossel
              key={produto.id}
              preco={produto.preco}
              image={produto.imagem}
            >
              {produto.nome}
            </CardCarrossel>
          );
        })}
      </ul>
      <button className={style.btn__rigth} onClick={handleRigthClick}>
        <img
          src={seta}
          alt="Seta para a esquerda"
          style={{ transform: "rotate(180deg)" }}
        />
      </button>
    </div>
  );
};
export default Carrossel;
