import logoWts from "../../assets/icons/logo-wts.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Menu from "../Menu/Menu";

import styles from "./Header.module.scss";

const Header = () => {
  const { height, width } = useWindowDimensions();

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.img} src={logoWts} alt="Logo" />
        <div>
          <p className={styles.text}>WebTeamStorm</p>
          <p className={styles.workTime}>Режим работы: пн-пт 09:00-18:00</p>
        </div>
      </div>
      {width >= 850 ? (
        <>
          <Menu />
          <button className={styles.btn}>Связаться с нами</button>
        </>
      ) : null}
    </header>
  );
};

export default Header;
