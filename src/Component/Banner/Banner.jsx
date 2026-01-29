import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from "@mui/material";
import { Button } from '@mui/material';
import { FaRegClock } from "react-icons/fa"; 

import 'swiper/css';
import bannerimage from './../../assets/images/hero-banner.jpeg'
const Banner = () => (
  <section className="relative  overflow-hidden">
    <div className="md:absolute inset-0" />
    <img src={bannerimage} alt="Logo" className='w-full md:h-full h-100 object-cover' />
    <div className="container mx-auto px-4  flex flex-col items-center justify-center text-white text-center">
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl font-inter text-black">
          Become a BB Seller Partner
        </h1>
        <div className="text-xl md:text-2xl mb-8 font-semibold font-inter text-black">Where Every Brand Finds a Basket</div>
        <Button
          variant="contained"
          size="large"
          className="!bg-white !text-green-700 !font-bold !px-8 !py-3 !rounded-full hover:!bg-gray-100"
        >
          <FaRegClock className='mr-1' />  Express Delivery
        </Button>
      </div>

    </div>
  </section>
);

export default Banner;
