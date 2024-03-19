import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";

import styles from "./App.module.scss";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };

  return (
    <div
      className={`${styles.container} ${isMobile ? styles.stopScroll : null}`}
    >
      <Header isMobile={isMobile} handleMenu={handleMobileMenu} />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
