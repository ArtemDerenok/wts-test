import ProjectSlide from "../ProjectSlide/ProjectSlide";
import styles from "./Projects.module.scss";
import Slider from "react-slick";
import nextArrow from "../../assets/icons/nextArrow.svg";
import prevArrow from "../../assets/icons/prevArrow.svg";
import project1 from "../../assets/img/photo_project1.png";
import project2 from "../../assets/img/photo_project2.png";
import project3 from "../../assets/img/photo_project3.png";
import project4 from "../../assets/img/photo_project4.png";
import project5 from "../../assets/img/photo_project5.png";

const SampleNextArrow = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <img src={prevArrow} alt="prev slide" />
    </div>
  );
};

const SamplePrevArrow = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <img src={nextArrow} alt="next slide" />
    </div>
  );
};

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Наши проекты </h2>
      <Slider {...settings}>
        <ProjectSlide
          heading="Лендинг для SkinClub"
          lists={[
            "Интуитивно понятный интерфейс",
            "Разработка оригинального дизайна",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
          ]}
          term={10}
          imgSrc={project1}
        />
        <ProjectSlide
          heading="Лединг для fire protection technologies"
          lists={[
            "Интуитивно понятный интерфейс",
            "Разработка оригинального дизайна",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
          ]}
          term={10}
          imgSrc={project2}
        />
        <ProjectSlide
          heading="Лендинг для SkinClub"
          lists={[
            "Интуитивно понятный интерфейс",
            "Разработка оригинального дизайна",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
          ]}
          term={10}
          imgSrc={project3}
        />
        <ProjectSlide
          heading="Лендинг для SkinClub"
          lists={[
            "Интуитивно понятный интерфейс",
            "Разработка оригинального дизайна",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
          ]}
          term={10}
          imgSrc={project4}
        />

        <ProjectSlide
          heading="Лендинг для SkinClub"
          lists={[
            "Интуитивно понятный интерфейс",
            "Разработка оригинального дизайна",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
            "Lorem Ipsum is simply dummy",
          ]}
          term={10}
          imgSrc={project5}
        />
      </Slider>
    </section>
  );
};

export default Projects;
