import style from "./Rodape.module.scss"
import logo from "assets/icons/Logo.svg"

const Rodape = () => {
    return (
        <footer className={style.rodape}>
            <img src={logo} alt="Logo da Espiral" className={style.logo}/>
            <ul className={style.lista__navs}>
                <li className={style.nav__conteiner}>
                    <h5 className={style.titulo}>Ajuda</h5>
                    <nav className={style.nav}>
                        <a href="/">Acessibilidade</a>
                        <a href="/">Contato</a>
                    </nav>
                </li>
                <li className={style.nav__conteiner}>
                    <h5 className={style.titulo}>Atendimento</h5>
                    <nav className={style.nav}>
                        <a href="/">Rastreamento de pedidos</a>
                        <a href="/">Devolução e Troca</a>
                        <a href="/">Perguntas frequentes</a>
                    </nav>
                </li>
                <li className={style.nav__conteiner}>
                    <h5 className={style.titulo}>Sobre nós</h5>
                    <nav className={style.nav}>
                        <a href="/">Parcerias</a>
                        <a href="/">Sobre nós</a>
                    </nav>
                </li>
                <li className={style.nav__conteiner}>
                    <h5 className={style.titulo}>Suporte</h5>
                    <nav className={style.nav}>
                        <a href="/">Politicas de privacidade</a>
                        <a href="/">Termos de uso</a>
                        <a href="/">Politica de envio</a>
                    </nav>
                </li>
            </ul>
        </footer>
    )
}

export default Rodape;