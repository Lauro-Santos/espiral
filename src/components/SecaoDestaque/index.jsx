import CardDestque from "./CardDestaque";
import style from "./SecaoDestaque.module.scss";

const SecaoDestaque = ({ urlBanner, text, span, data, limit }) => {
  return (
    <section className={style.sacao__destaque}>
      <div
        className={style.banner}
        style={{ backgroundImage: `url(/assets/banners/${urlBanner})` }}
      >
        <div className={style.texto__conteiner}>
          {!span ? (
            <h3>{text}</h3>
          ) : (
            <h3 className={style.com__span}>
              {text}
              <span>{span}</span>
            </h3>
          )}
          <a href="/">Ver Coleção</a>
        </div>
      </div>

      <ul className={style.produto__amostra}>
        {data.slice(0, limit).map((produto) => (
          <CardDestque image={produto.imagem} preco={produto.preco}>
            {produto.nome}
          </CardDestque>
        ))}
      </ul>
    </section>
  );
};

export default SecaoDestaque;
