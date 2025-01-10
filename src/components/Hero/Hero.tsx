import React from "react";
import styles from "./hero.module.scss";
import MySwiper from "../Swiper/MySwiper";
import bgOne from "../../../public/bg-hero-one.png";
import bgTwo from "../../../public/bg-hero-two.jpg";
import bgThree from "../../../public/bg-hero-three.png";
import bgFor from "../../../public/bg-hero-for.png";
import bgFive from "../../../public/bg-hero-five.png";

export const images = [bgThree, bgThree, bgThree, bgFor, bgFive];
const Hero = () => {
  return (
    <section className={styles.hero}>
      <MySwiper data={images} />
      {/* <div className="container">
        <h2>распродажа товаров для неё</h2>
        <button>Перейти в каталог</button>
      </div> */}
    </section>
  );
};

export default Hero;
