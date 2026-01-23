import React from 'react';
import roadmap from './../../assets/images/roadmap-img.png'
import roadmap2 from './../../assets/images/roadmap-res.png'
const StepsRoadmap = () => (
  <section className="py-14 bg-gradient-to-r from-green-50 to-blue-50">
    <div className="container mx-auto px-4">
      <h3
        className="text-center font-regular lg:pb-12 pb-5 font-inclusive lg:text-6xl text-3xl"
      >
        Your Gateway to Smarter Business <br></br> With
        <span className="text-red-600 font-semibold"> big</span>basket
      </h3>
    </div>
    <div className="relative">
      <div className="" />

      <div>

        <div className="roadmap-img">
          <img src={roadmap} alt="Roadmap" className="w-full h-auto hidden md:block" />
          <img src={roadmap2} alt="Roadmap" className="w-full h-auto md:hidden" />
        </div>
      </div>
    </div>

  </section>
);

export default StepsRoadmap;
