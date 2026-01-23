import React, { useRef, useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

import slider1 from './../../assets/images/slider-1.png'
import slider2 from './../../assets/images/slider-2.png'
import slider3 from './../../assets/images/slider-3.png'
import slider4 from './../../assets/images/slider-4.png'
const slides = [
    {
        tab: "Seamless Delivery",
        title: "Seamless Delivery",
        desc: "Move your products from shelf to doorstep in minutes.\nWith bigbasket's 500+ dark stores, delivery speed meets reliability.\nEvery order fulfilled. Every customer impressed.",
        image: slider1,
    },
    {
        tab: "Accelerated Growth",
        title: "Accelerated Growth",
        desc: "Scale faster with access to millions of customers and a powerful supply chain network.",
        image: slider2,
    },
    {
        tab: "Limitless Categories",
        title: "Limitless Categories",
        desc: "From groceries to gourmet, list unlimited categories without operational friction.",
        image: slider3,
    },
    {
        tab: "Effortless Onboarding",
        title: "Effortless Onboarding",
        desc: "Get started quickly with a simple onboarding and dedicated partner support.",
        image: slider4,
    },
];
const Tabslider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section className="container  mx-auto bg-white py-14 tab-slider-section px-6">
            <Box className="container  mx-auto mb-6 rounded-lg border border-lime-500 px-6 py-5">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView="auto"
                    watchSlidesProgress
                    modules={[Thumbs, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true, 
                    }}
                    className="thumb-swiper"
                >
                    {slides.map((item, i) => (
                        <SwiperSlide key={i} className="!w-auto">
                            <div className="thumb-pill px-4 py-2 rounded-full cursor-pointer text-md font-regular transition-all">
                                {item.tab}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <style>{`
.thumb-swiper .swiper-slide-thumb-active .thumb-pill {
background: radial-gradient(#a0c934, #6fa20e);
color: white;
}
.thumb-swiper .thumb-pill {
color: #000;
}
`}</style>
            </Box>

            <Swiper
                modules={[Thumbs, Autoplay]}
                thumbs={{ swiper: thumbsSwiper }}
                speed={300}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, 
                }}
            >
                {slides.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="container  mx-auto bg-lime-50 rounded-3xl p-10 flex flex-col md:flex-row gap-8">
                            <div className="flex-1 text-left">
                                <h4 className="font-semibold lg:text-5xl text-3xl  mb-3 text-secondary_2">
                                    {item.title}
                                </h4>
                                <div className="w-full h-[3px] bg-secondary mb-4" />
                                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </div>


                            <div className="flex-1 flex justify-center">
                                <img src={item.image} alt={item.title} className="w-full" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Tabslider