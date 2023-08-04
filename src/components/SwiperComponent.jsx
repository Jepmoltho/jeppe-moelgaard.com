import React from "react";
//import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//export default SwiperComponent () => {
export default function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
/*
const SwiperComponent = () => {
  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    // Add more slide content as needed
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">{slideContent}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
*/
