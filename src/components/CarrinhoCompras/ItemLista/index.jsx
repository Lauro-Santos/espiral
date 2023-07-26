import fotoTeste from "assets/images/CAMISA 1.png"
import style from "./ItemLista.module.scss"

const ItemLista = () => {
  return (
    <li className={style.item}>
      <img className={style.imagem} src={fotoTeste} alt="teste" />
      <p className={style.texto}>Nome do produto</p>
      <span className={style.preco}>R$ 0,00</span>
      <button className={style.excluir}>
        <i className={style.lixeira}></i>
      </button>
    </li>
  );
};

export default ItemLista;
