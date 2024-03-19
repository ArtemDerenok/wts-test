import { useState } from "react";
import logoWts from "../../assets/icons/logo-wts.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";

import styles from "./Header.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../Logo/Logo";

const Header = ({
  isMobile,
  handleMenu,
}: {
  isMobile: boolean;
  handleMenu: () => void;
}) => {
  const { height, width } = useWindowDimensions();

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
