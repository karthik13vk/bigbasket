import { Box, Typography } from '@mui/material';
import CountUpOnScroll from "./CountUpOnScroll";
import cities from './../../assets/images/cities.png'
import products from './../../assets/images/products.png'
import brand from './../../assets/images/brand.png'
import order from './../../assets/images/order.png'
import heroBg from './../../assets/images/BB-BG.png' 

const Stats = () => {
  const stats = [
    {
      value: 30,
      label: "Number of\nCities Covered",
      bg: "bg-blue-200",
      img: cities,
    },
    {
      value: 50000,
      label: "Number of\nproducts listed",
      bg: "bg-yellow-200",
       img: products,
    },
    {
      value: 1000,
      label: "Number of Brands",
      bg: "bg-indigo-200",
        img: brand,
    },
    {
      value: 15000000,
      label: "Orders Per Month",
      bg: "bg-pink-200",
       img: order,
    },
  ];

  return (
    <Box className="py-14 bg-white counter-section bg-bottom bg-contain bg-no-repeat"  style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container mx-auto px-4">
        <h3
          className="text-center font-regular lg:pb-12 pb-5 font-inclusive lg:text-6xl text-3xl"
        >
          BigBasket Built to Deliver
        </h3>
      </div>

      
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[260px]`}
          >
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-2">
                <CountUpOnScroll end={item.value} />
              </h3>
              <p className="text-gray-800 whitespace-pre-line text-lg">
                {item.label}
              </p>
            </div>

            <div className="flex justify-end mt-4">
              <img
                src={item.img}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Stats;
