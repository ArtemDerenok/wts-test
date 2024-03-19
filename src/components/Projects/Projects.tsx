import ProjectSlide from "../ProjectSlide/ProjectSlide";
import styles from "./Projects.module.scss";
import Slider from "react-slick";
import project1 from "../../assets/img/photo_project1.png";
import project2 from "../../assets/img/photo_project2.png";
import project3 from "../../assets/img/photo_project3.png";
import project4 from "../../assets/img/photo_project4.png";
import project5 from "../../assets/img/photo_project5.png";
import project1_vertical from "../../assets/img/photo_project1_v.png";
import project2_vertical from "../../assets/img/photo_project2_v.png";
import project3_vertical from "../../assets/img/photo_project3_v.png";
import project4_vertical from "../../assets/img/photo_project4_v.png";
import project5_vertical from "../../assets/img/photo_project5_v.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const SampleNextArrow = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return <div className={styles.prevArrow} onClick={onClick}></div>;
};

const SamplePrevArrow = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return <div className={styles.nextArrow} onClick={onClick}></div>;
};

const Projects = () => {
  const { width } = useWindowDimensions();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow onClick={() => {}} />,
    prevArrow:
      width <= 665 ? undefined : <SampleNextArrow onClick={() => {}} />,
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
          imgSrc={width <= 1560 && width >= 851 ? project1_vertical : project1}
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
          imgSrc={width <= 1560 && width >= 850 ? project2_vertical : project2}
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
          imgSrc={width <= 1560 && width >= 850 ? project3_vertical : project3}
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
          imgSrc={width <= 1560 && width >= 850 ? project4_vertical : project4}
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
          imgSrc={width <= 1560 && width >= 850 ? project5_vertical : project5}
        />
      </Slider>
    </section>
  );
};

export default Projects;
