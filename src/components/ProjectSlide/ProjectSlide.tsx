import OrderBtn from "../OrderBtn/OrderBtn";
import styles from "./ProjectSlide.module.scss";

const ProjectSlide = ({
  heading,
  lists,
  term,
  imgSrc,
}: {
  heading: string;
  lists: string[];
  term: number;
  imgSrc: string;
}) => {
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt="landing" className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.content__title}>{heading}</h3>
        <p className={styles.content__text}>Поставленные задачи:</p>
        <ul className={styles.content__list}>
          {lists.map((elem, index) => (
            <li className={styles.content__listItem} key={index}>
              {elem}
            </li>
          ))}
        </ul>
        <p className={styles.content__text}>
          Срок выполнения работы: <span>{term} дней</span>
        </p>
        <OrderBtn />
      </div>
    </div>
  );
};

export default ProjectSlide;
