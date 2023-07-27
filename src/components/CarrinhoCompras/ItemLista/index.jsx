import style from "./ItemLista.module.scss"

const ItemLista = ({children, preco, image}) => {
  return (
    <li className={style.item}>
      <img className={style.imagem} src={require(`/src/assets/images/${image}`)} alt="teste" />
      <p className={style.texto}>{children}</p>
      <span className={style.preco}>R$ {preco}</span>
      <button className={style.excluir}>
        <i className={style.lixeira}></i>
      </button>
    </li>
  );
};

export default ItemLista;
