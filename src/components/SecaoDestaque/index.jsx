import style from "./SecaoDestaque.module.scss";

const SecaoDestaque = ({urlImage, text}) => {
  return (
    <section className={style.sacao__destaque} style={{backgroundImage: `url(${urlImage})`}}>
      <div className={style.texto__conteiner}>
        <h3>{text}</h3>
        <a href="/">Ver Colação</a>
      </div>
    </section>
  );
};

export default SecaoDestaque;
