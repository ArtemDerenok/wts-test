import logoWts from "../../assets/icons/logo-wts.svg";
import logoWtsWhite from "../../assets/icons/wtsLogoWhite.svg";
import styles from "./Logo.module.scss";

const Logo = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className={styles.logo}>
      <img
        className={styles.img}
        src={isMobile ? logoWtsWhite : logoWts}
        alt="Logo"
      />
      <div>
        <p className={`${styles.text} ${isMobile ? styles.white : null}`}>
          WebTeamStorm
        </p>
        <p className={`${styles.workTime} ${isMobile ? styles.white : null}`}>
          Режим работы: пн-пт 09:00-18:00
        </p>
      </div>
    </div>
  );
};

export default Logo;
