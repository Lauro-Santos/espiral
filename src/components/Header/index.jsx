import style from "./Header.module.scss";
import logo from "assets/icons/Logo.svg";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const [menuState, setManuState] = useState(false)

  const handClick = () => {
    setManuState(!menuState)
  }

  return (
    <header className={style.cabecalho}>
      <div className={style.logo}>
        <img src={logo} alt="Logo da Espiral" />
        <span>Espiral</span>
      </div>
      <nav className={style.links__cabecalho}>
        <a>Ínicio</a>
        <a>Catálogo</a>
      </nav>
      <div className={style.utilitarios}>
        <div className={style.conteiner__pesquisa}>
          <div className={style.barra__pesquisa}>
            <span>
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Lupa-icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5044 10.8521C10.3263 12.4211 8.49373 13.4293 6.43543 13.4293C2.88124 13.4293 0 10.4231 0 6.71466C0 3.00626 2.88124 0 6.43543 0C9.98962 0 12.8709 3.00626 12.8709 6.71466C12.8709 7.54486 12.7265 8.33987 12.4624 9.07384L17.2184 12.6183L16.0886 14.2687L11.5044 10.8521ZM10.8709 6.71466C10.8709 9.39941 8.80585 11.4293 6.43543 11.4293C4.06502 11.4293 2 9.39941 2 6.71466C2 4.02992 4.06502 2 6.43543 2C8.80585 2 10.8709 4.02992 10.8709 6.71466Z"
                  fill="#E8E1DC"
                />
              </svg>
            </span>
            <input type="search" placeholder="Pesquisar..." />
            <button>Buscar</button>
          </div>
        </div>
        <div className={style.conteiner__user__bag__menu}>
          <i className={style.icone} id={style.user}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="User-icon"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM15.4488 18.8254C14.1367 19.5729 12.6182 20 11 20C9.38187 20 7.86347 19.573 6.55136 18.8254C6.67239 18.1204 6.99906 17.5883 7.43862 17.2057C8.01647 16.7028 8.8635 16.3967 9.87799 16.3967H12.1222C13.1367 16.3967 13.9837 16.7028 14.5616 17.2057C15.0011 17.5883 15.3278 18.1204 15.4488 18.8254ZM17.1672 17.5548C16.8902 16.8236 16.4486 16.1967 15.8746 15.6971C15.2047 15.1141 14.3863 14.7311 13.4998 14.5401C13.9356 14.2871 14.3354 13.9685 14.6852 13.5933C15.694 12.5114 16.0342 11.1259 16.0342 10.1184C16.0342 9.10891 15.6946 7.72293 14.6852 6.64044C13.7333 5.6195 12.411 5.01709 11.0001 5.01709C9.58917 5.01709 8.26692 5.6195 7.31498 6.64044C6.30044 7.72854 5.97095 9.11839 5.97095 10.1184C5.97095 11.1164 6.30101 12.5058 7.31498 13.5933C7.66479 13.9685 8.0646 14.2871 8.50044 14.5401C7.61394 14.7311 6.79546 15.1141 6.12557 15.6971C5.55157 16.1967 5.10997 16.8237 4.8329 17.5549C3.08892 15.9135 2 13.5839 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.5839 18.9111 15.9134 17.1672 17.5548ZM7.97095 10.1184C7.97095 9.49383 8.18837 8.63648 8.77777 8.00435C9.36718 7.37222 10.1666 7.01709 11.0001 7.01709C11.8336 7.01709 12.633 7.37222 13.2224 8.00435C13.8118 8.63648 14.0342 9.49383 14.0342 10.1184C14.0342 10.7399 13.8118 11.5972 13.2224 12.2294C12.633 12.8615 11.8336 13.2166 11.0001 13.2166C10.1666 13.2166 9.36718 12.8615 8.77777 12.2294C8.18837 11.5972 7.97095 10.7399 7.97095 10.1184Z"
                fill="#E8E1DC"
              />
            </svg>
          </i>
          <i className={style.icone} id={style.bag}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Bag-icon"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 0C10.4231 0 9.74662 0.110697 9.12033 0.310108C8.50924 0.504682 7.83309 0.819309 7.3465 1.30167C6.50445 2.13641 6.02979 3.27041 6.02979 4.4547V5.26318H2.97185C2.19656 5.26318 1.44521 5.55845 0.885032 6.09618C0.323467 6.63525 0 7.37531 0 8.15604V19.1072C0 19.8879 0.323467 20.628 0.885032 21.167C1.44521 21.7048 2.19656 22 2.97185 22H19.0281C19.8034 22 20.5548 21.7048 21.115 21.167C21.6765 20.628 22 19.8879 22 19.1072V8.15604C22 7.37531 21.6765 6.63525 21.115 6.09618C20.5548 5.55845 19.8034 5.26318 19.0281 5.26318H16V4.4547C16 3.27041 15.5253 2.13641 14.6833 1.30167C14.1935 0.816133 13.506 0.502145 12.8908 0.30892C12.2586 0.110382 11.576 0 11 0ZM14 7.26318V11.0881C14 11.6404 14.4477 12.0881 15 12.0881C15.5523 12.0881 16 11.6404 16 11.0881V7.26318H19.0281C19.2988 7.26318 19.5505 7.36677 19.7299 7.539C19.908 7.70989 20 7.93274 20 8.15604V19.1072C20 19.3305 19.908 19.5533 19.7299 19.7242C19.5505 19.8964 19.2988 20 19.0281 20H2.97185C2.70121 20 2.44946 19.8964 2.27005 19.7242C2.09203 19.5533 2 19.3305 2 19.1072V8.15604C2 7.93274 2.09203 7.70989 2.27005 7.539C2.44946 7.36677 2.70121 7.26318 2.97185 7.26318H6.02979V11.0881C6.02979 11.6404 6.4775 12.0881 7.02979 12.0881C7.58207 12.0881 8.02979 11.6404 8.02979 11.0881V7.26318H14ZM14 5.26318V4.4547C14 3.8065 13.7403 3.18307 13.2752 2.72204C13.1115 2.5597 12.7714 2.36776 12.2915 2.21703C11.8285 2.07161 11.3483 2 11 2C10.6526 2 10.1811 2.07129 9.72712 2.21584C9.25795 2.36522 8.9215 2.55653 8.75453 2.72204C8.28946 3.18308 8.02979 3.8065 8.02979 4.4547V5.26318H14Z"
                fill="#E8E1DC"
              />
            </svg>
          </i>
          <i className={style.icone} id={style.menu} onClick={handClick}>
            <svg
              width="30"
              height="18"
              viewBox="0 0 30 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.75C0 0.335787 0.335815 0 0.75 0H29.25C29.6642 0 30 0.335787 30 0.75C30 1.16421 29.6642 1.5 29.25 1.5H0.75C0.335815 1.5 0 1.16421 0 0.75Z"
                fill="#EC6D69"
              />
              <path
                d="M11 8.75C11 8.33579 11.3358 8 11.75 8H29.25C29.6642 8 30 8.33579 30 8.75C30 9.16421 29.6642 9.5 29.25 9.5H11.75C11.3358 9.5 11 9.16421 11 8.75Z"
                fill="#EC6D69"
              />
              <path
                d="M0.75 16C0.335815 16 0 16.3358 0 16.75C0 17.1642 0.335815 17.5 0.75 17.5H29.25C29.6642 17.5 30 17.1642 30 16.75C30 16.3358 29.6642 16 29.25 16H0.75Z"
                fill="#EC6D69"
              />
            </svg>
          </i>
        </div>
        {menuState && <Menu />}
        
      </div>
    </header>
  );
};

export default Header;
