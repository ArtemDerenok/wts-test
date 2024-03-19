import arrowImg from "../../assets/icons/arrow-down.svg";
import styles from "./Menu.module.scss";

const Menu = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <nav className={isMobile ? styles.mobileContainer : styles.container}>
      <ul className={isMobile ? styles.mobileMenu : styles.menu}>
        <li
          className={`${styles.menuItem} ${styles.servicesMenu} ${
            isMobile ? styles.mobileMenuItem : null
          }`}
        >
          <a href="#">Услуги</a>
          <img src={arrowImg} alt="menu arrow" />
        </li>
        <li
          className={`${styles.menuItem}  ${
            isMobile ? styles.mobileMenuItem : null
          }`}
        >
          <a href="#">Преимущества</a>
        </li>
        <li
          className={`${styles.menuItem}  ${
            isMobile ? styles.mobileMenuItem : null
          }`}
        >
          <a href="#">Портфолио</a>
        </li>
        <li
          className={`${styles.menuItem}  ${
            isMobile ? styles.mobileMenuItem : null
          }`}
        >
          <a href="#">Заказать</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
