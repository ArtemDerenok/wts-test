import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.container}>
      <section>
        <Header />
      </section>
    </div>
  );
}

export default App;
