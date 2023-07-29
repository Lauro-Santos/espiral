import { useState } from "react";
import style from "./CarrinhoCompra.module.scss";
import ItemLista from "./ItemLista";

const CarrinhoCompra = ({ bagShow, updateBagState }) => {
  const [isOpen, setIsOpen] = useState(bagShow);

  const handleClick = () => {
    setIsOpen(false);
    updateBagState(false);
  };

  return (
    <div className={style.bag}>
      <header className={style.cabecalho__bag}>
        <div className={style.texto__conteiner}>
          <h3>Seu carrinho</h3>
          <span>0 itens</span>
        </div>
        <button className={style.fechar__bag} onClick={handleClick}></button>
      </header>
      <main className={style.main__bag}>
        <ul className={style.lista__itens}>
          <ItemLista image={"camisa.png"} preco="0,00">
            Nome do produto
          </ItemLista>
        </ul>
      </main>
      <footer className={style.rodape__bag}>
        <span>Total R$ 0,00</span>
        <button>Fechar pedido</button>
      </footer>
    </div>
  );
};

export default CarrinhoCompra;
