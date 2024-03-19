import styles from "./Hamburger.module.scss";

const Hamburger = ({
  isMobile,
  handleMenu,
}: {
  isMobile: boolean;
  handleMenu: () => void;
}) => {
  return (
    <div
      onClick={handleMenu}
      className={`${styles.hamburger} ${
        isMobile ? styles.hamburger_active : null
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
