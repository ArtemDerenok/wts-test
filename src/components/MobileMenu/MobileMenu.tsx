import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import tgIcon from "../../assets/icons/tg.svg";
import vkIcon from "../../assets/icons/vk.svg";
import skypeIcon from "../../assets/icons/skype.svg";
import mailIcon from "../../assets/icons/mail.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import styles from "./MobileMenu.module.scss";

const MobileMenu = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className={styles.container}>
      <Logo isMobile={isMobile} />
      <Menu isMobile={isMobile} />
      <button className={styles.btn}>Связаться с нами</button>
      <ul className={styles.socialList}>
        <li>
          <a href="#">
            <img src={tgIcon} alt="telegram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={vkIcon} alt="vk" />
          </a>
        </li>
        <a href="#">
          <img src={skypeIcon} alt="skype" />
        </a>
        <li>
          <a href="#">
            <img src={mailIcon} alt="mail" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={whatsappIcon} alt="whatsapp" />
          </a>
        </li>
      </ul>
      <p className={styles.text}>
        Режим работы: <br />
        пн-пт 09:00-18:00
      </p>
      <p className={styles.text}>
        Номер телефона: <br /> +7 (928) 956-61-98
      </p>
      <p className={styles.text}>
        Email: <br /> webteamstorm@gmail.com
      </p>
    </div>
  );
};

export default MobileMenu;
