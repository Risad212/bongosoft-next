import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
// =============== My Import  ====================
import Image from 'next/image';
import slider1 from '../../Media/slider1.jpg'
import slider2 from '../../Media/slider2.jpg'
import slider3 from '../../Media/slider3.jpg'
import slider4 from '../../Media/slider4.jpg'
import slider from './slider.module.css';

const Slider = () => {
  return (
    <>
      <div>
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          loop={true}
          className={slider.mySwiper}>
          <SwiperSlide><Image src={slider1} /></SwiperSlide>
          <SwiperSlide><Image src={slider2} /></SwiperSlide>
          <SwiperSlide><Image src={slider3} /></SwiperSlide>
          <SwiperSlide><Image src={slider4} /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
};

export default Slider;