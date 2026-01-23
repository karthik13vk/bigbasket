
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import Categories1 from './../../assets/images/Categories-1.png'
import Categories2 from './../../assets/images/Categories-2.png'
import Categories3 from './../../assets/images/Categories-3.png'
import Categories4 from './../../assets/images/Categories-4.png'
import Categories5 from './../../assets/images/Categories-5.png'
import Categories6 from './../../assets/images/Categories-6.png'
import Categories7 from './../../assets/images/Categories-7.png'
import Categories8 from './../../assets/images/Categories-8.png'
import Categories9 from './../../assets/images/Categories-9.png'
import Categories10 from './../../assets/images/Categories-10.png'
import Categories11 from './../../assets/images/Categories-11.png'
import Categories12 from './../../assets/images/Categories-12.png'
import Categories13 from './../../assets/images/Categories-13.png'
import Categories14 from './../../assets/images/Categories-14.png'
import Categories15 from './../../assets/images/Categories-15.png'
import innerimg from './../../assets/images/line-bg.png'
const categories = [
  {
    title: "GOURMET & WORLD FOOD",
    image:
      Categories1,
    bg: "#e3ffb2",
  },
  {
    title: "ELECTRONICS",
    image: Categories2,
    bg: "#ffe4bd",
  },
  {
    title: "FRUITS & VEGETABLES",
    image:
      Categories3,
    bg: "#f9e8ad",
  },
  {
    title: "FASHION",
    image:
      Categories4,
    bg: "#fbd8d5",
  },
  {
    title: "PHARMACY & WELLNESS",
    image:
      Categories5,
    bg: "#d8ecfe",
  },
  {
    title: "BAKES, CAKES & DAIRY",
    image:
      Categories6,
    bg: "#e3ffb2",
  },
  {
    title: "BEVERAGES",
    image:
      Categories7,
    bg: "#f9e8ad",
  },
  {
    title: "SNACK'S",
    image:
      Categories8,
    bg: "#ffe4bd",
  },
  {
    title: "GOURMET & FOOD",
    image:
      Categories9,
    bg: "#fbd8d5",
  },
  {
    title: "PETS",
    image:
      Categories10,
    bg: "#d8ecfe",
  },
  {
    title: "KITCHEN",
    image:
      Categories11,
    bg: "#e3ffb2",
  },
  {
    title: "CLEANING & HOUSEHOLD",
    image:
      Categories12,
    bg: "#f9e8ad",
  },
  {
    title: "EGG, MEAT & FISH",
    image:
      Categories13,
    bg: "#ffe4bd",
  },
  {
    title: "BABY CARE",
    image:
      Categories14,
    bg: "#fbd8d5",
  },
  {
    title: "FOOD GRAINS & OIL",
    image:
      Categories15,
    bg: "#d8ecfe",
  },
];

const Categories_section = () => (
  <div className="py-14 bg-gradient-to-b from-white to-green-50 categories-section px-6 container  mx-auto">
   
    <h3
      className="text-center font-semibold lg:pb-12 pb-5 font-inclusive lg:text-6xl text-3xl"
    >
      One Platform Endless{" "}
      <span className="text-primary">Categories</span>
    </h3>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      // navigation
      loop={true}
      speed={800}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      className="container mx-auto px-6 categories-box-area"
    >
      {categories.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-3xl shadow-xl overflow-hidden 
          bg-white hover:scale-105 transition-transform duration-300 categories-box">

            <div className="p-6 categories-img mb-1 relative overflow-hidden" style={{ backgroundColor: item.bg }}>
              <div className="categories-inner-img">
                <img src={innerimg} alt="" />
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain relative z-10"
              />
            </div>

            <div className="bg-secondary text-white text-center font-semibold py-4">
              {item.title}
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
);

export default Categories_section;
