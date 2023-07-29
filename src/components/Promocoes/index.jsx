import Carrossel from "components/Carrossel";
import style from "./Promocoes.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Promocoes = () => {
  const [items, setItems] = useState([]);
  const urlDB = "https://raw.githubusercontent.com/Lauro-Santos/espiral-data/main/db.json"

  async function fetchData() {
    try {
      const { data } = await axios.get(urlDB);
      setItems(data.produtos);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  }
  useEffect(() =>{
    fetchData()
  }, [])

  return (
    <section className={style.promocoes}>
      <h2 className={style.titulo}>Promoções</h2>
      <Carrossel data={items}/>
    </section>
  );
};
export default Promocoes;
