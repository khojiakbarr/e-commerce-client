"use client";

import Image, { StaticImageData } from "next/image";
import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./mySwiper.module.scss";

interface mySwiper {
  data: StaticImageData[];
}
const MySwiper: FC<mySwiper> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        navigation={{ nextEl: ".my-next-button", prevEl: ".my-prev-button" }}
        modules={[Navigation]}
        onSlideChangeTransitionStart={handleSlideChange}
        className={styles.swiper}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${styles.slide} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <Image
                src={item.src}
                alt={`Slide ${item.src}`}
                className={styles.image}
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MySwiper;
