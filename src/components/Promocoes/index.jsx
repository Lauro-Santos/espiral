import Carrossel from "components/Carrossel";
import style from "./Promocoes.module.scss";
import { useEffect } from "react";

const Promocoes = () => {

  useEffect(() =>{

  }, [])

  return (
    <section className={style.promocoes}>
      <h2 className={style.titulo}>Promoções</h2>
      <Carrossel />
    </section>
  );
};
export default Promocoes;
