import style from "./SecaoPrincipal.module.scss";
import bg from "assets/images/bg.jpg"
import modelo from "assets/images/MAN.png"

const SecaoPrincipal = () => {
    return (
        <section className={style.secao_principal} style={{backgroundImage: `url(${bg})`}}>
            <img className={style.modelo} src={modelo} alt="Modelo do banner" />
            <div className={style.texto__conteiner}>
                <h1 className={style.titulo}>Moda inverno <span>Nova coleção</span></h1>
                <p>A partir de <span>R$ 98,00</span></p>
                <a href="/">Compre agora</a>
            </div>
        </section>
    )
}

export default SecaoPrincipal;