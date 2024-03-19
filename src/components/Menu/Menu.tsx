import arrowImg from "../../assets/icons/arrow-down.svg";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${styles.servicesMenu}`}>
          <a href="#">Услуги</a>
          <img src={arrowImg} alt="menu arrow" />
        </li>
        <li className={styles.menuItem}>
          <a href="#">Преимущества</a>
        </li>
        <li className={styles.menuItem}>
          <a href="">Портфолио</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#">Заказать</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
