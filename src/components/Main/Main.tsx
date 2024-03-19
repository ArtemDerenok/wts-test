import OrderBtn from "../OrderBtn/OrderBtn";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.container}>
      <section className={styles.leftSection}>
        <h1>
          Лендинг для вашего бизнеса <br />
          <span>за 10 дней</span>
        </h1>
        <h2>Гарантируем увеличение выручки!</h2>
        <OrderBtn />
      </section>
      <section className={styles.rightSection}>
        <div>
          <p>
            Более <span>7</span> лет на рынке
          </p>
          <p>
            <span>100+</span> реализованных проектов
          </p>
          <p>
            <span>10%</span> минимальный рост выручки
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
