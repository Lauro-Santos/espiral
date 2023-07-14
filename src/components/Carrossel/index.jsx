import React, {useRef} from "react";

import style from "./Carrossel.module.scss";
import novo from "assets/icons/Novo-icon.svg";
import seta from "assets/icons/Arrow-icon.svg"
import fotoTeste from "assets/images/CAMISA 1.png";

const Carrossel = () => {

    const carrosel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth
    }
    const handleRigthClick = (e) => {
        e.preventDefault()
        carrosel.current.scrollLeft += carrosel.current.offsetWidth
    }
  return (
    <>
      <div className={style.carrossel} ref={carrosel}>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
        <div className={style.card}>
          <i className={style.curtir}>
            <svg viewBox="0 0 12 11" fill="none">
              <path d="M5.53483 10.0235L5.47918 9.97286L1.5791 6.39169C0.895698 5.76438 0.508362 4.88394 0.508362 3.96168V3.88905C0.508362 2.33948 1.6214 1.01002 3.16184 0.719475C4.03891 0.552192 4.93602 0.752491 5.65059 1.24994C5.85093 1.39081 6.03792 1.55369 6.20711 1.74078C6.3006 1.63513 6.40077 1.53828 6.50763 1.44804C6.58999 1.3776 6.67458 1.31157 6.76362 1.24994C7.47819 0.752491 8.3753 0.552192 9.25237 0.717274C10.7928 1.00782 11.9059 2.33948 11.9059 3.88905V3.96168C11.9059 4.88394 11.5185 5.76438 10.8351 6.39169L6.93503 9.97286L6.87938 10.0235C6.69684 10.1908 6.45643 10.2854 6.20711 10.2854C5.95779 10.2854 5.71737 10.193 5.53483 10.0235ZM5.8309 2.90956C5.822 2.90296 5.81532 2.89415 5.80864 2.88535L5.4124 2.44513L5.41017 2.44293C4.89595 1.87285 4.11905 1.61312 3.36219 1.75619C2.32484 1.95209 1.57688 2.84573 1.57688 3.88905V3.96168C1.57688 4.58899 1.84178 5.18989 2.30703 5.6169L6.20711 9.19808L10.1072 5.6169C10.5724 5.18989 10.8373 4.58899 10.8373 3.96168V3.88905C10.8373 2.84793 10.0894 1.95209 9.05425 1.75619C8.29739 1.61312 7.51826 1.87505 7.00627 2.44293C7.00627 2.44293 7.00627 2.44293 7.00404 2.44513C7.00181 2.44733 7.00404 2.44513 7.00181 2.44733L6.60557 2.88755C6.59889 2.89635 6.58999 2.90296 6.58331 2.91176C6.48314 3.01081 6.34735 3.06584 6.20711 3.06584C6.06686 3.06584 5.93107 3.01081 5.8309 2.91176V2.90956Z" />
            </svg>
          </i>
          <i className={style.novo}>
            <img src={novo} alt="icone de novo produto" />
          </i>
          <img
            src={fotoTeste}
            alt="imagem do produto"
            className={style.imagem_produto}
          />
          <div className={style.texto__conteiner}>
            <p className={style.nome__produto}>Nome do produto</p>
            <p className={style.preco}>R$ 0,00</p>
          </div>
        </div>
      </div>
      <div className={style.botoes}>
        <button onClick={handleLeftClick}><img src={seta} alt="Seta para a esquerda" /></button>
        <button onClick={handleRigthClick}><img src={seta} alt="Seta para a esquerda" style={{transform: 'rotate(180deg)'}}/></button>
      </div>
    </>
  );
};
export default Carrossel;
