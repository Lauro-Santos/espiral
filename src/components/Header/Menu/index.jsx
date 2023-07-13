import style from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={style.menu}>
      <ul className={style.menu__lista}>
        <li>
          <a>Ínicio</a>
        </li>
        <li>
          <a>Sobre nós</a>
        </li>
        <li>
          <a>Suporte</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
