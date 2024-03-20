import useWindowDimensions from "../../hooks/useWindowDimensions";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = ({
  isMobile,
  handleMenu,
}: {
  isMobile: boolean;
  handleMenu: () => void;
}) => {
  const { width } = useWindowDimensions();

  return (
    <header className={styles.container}>
      <Logo isMobile={isMobile} />
      {width >= 850 ? (
        <>
          <Menu isMobile={isMobile} />
          <button className={styles.btn}>Связаться с нами</button>
        </>
      ) : (
        <Hamburger isMobile={isMobile} handleMenu={handleMenu} />
      )}
      {isMobile ? <MobileMenu isMobile={isMobile} /> : null}
    </header>
  );
};

export default Header;
