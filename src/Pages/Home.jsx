import React from "react";
import Myheropic from "../img/8324749.png";
import milkpic from "../img/290-2908577_milk-cup-glass-transparent-glass-of-milk-png-removebg-preview.png";
import time from "../img/tme.png";

const Home = () => {
  return (
    <>
      <article className="w-full max-w-[1400px] mx-auto px-4">

        {/* HERO SECTION */}
        <div
          className="
            flex flex-col md:flex-row items-center justify-center
            gap-10 md:gap-16 lg:gap-20
            bg-gradient-to-b from-blue-300 to-green-300
            min-h-[70vh] md:min-h-[75vh]
            py-12 sm:py-16 md:py-24
            mt-4 rounded-t-3xl
            relative overflow-hidden
          "
        >

          {/* LEFT TEXT */}
          <div className="flex flex-col gap-4 flex-1 text-center md:text-left px-2">
            <h6 className="text-sm sm:text-base md:mb-3.5 lg:text-lg text-gray-700 font-medium">
              Fresh & Authentic
            </h6>

            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-extrabold leading-tight
              "
            >
              DELICIOUS FOOD TO{" "}
              <br className="hidden md:block" />
              CURB YOUR HUNGRY
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
              Our organic whole milk comes from pasture-raised cows,
              free from artificial hormones and antibiotics,
              ensuring a rich and creamy taste in every sip.
            </p>

            <div className="flex justify-center md:justify-start mt-4">
              <button
                className="
                  w-36 sm:w-40 md:w-44 
                  h-11 sm:h-12 
                  bg-gradient-to-r from-blue-500 to-green-500
                  text-white text-sm md:text-base font-semibold 
                  rounded-full transition-all duration-300
                  hover:shadow-xl hover:scale-105 md:mt-3.5
                "
              >
                Order Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center items-center flex-1 w-full">

            {/* Main Image */}
            <img
              src={Myheropic}
              alt="Main dish"
              className="
                w-[200px] sm:w-[260px] md:w-[380px] lg:w-[480px]
                object-contain z-10 drop-shadow-xl
              "
            />

            {/* Milk Icon */}
            <img
              src={milkpic}
              alt="Milk"
              className="
                absolute
                bottom-2 sm:bottom-4 md:bottom-10 
                left-2 sm:left-4 md:left-12 
                w-[70px] sm:w-[100px] md:w-[130px] lg:w-[150px]
                object-contain
              "
            />

            {/* Time Icon */}
            <img
              src={time}
              alt="Time"
              className="
                absolute
                top-2 sm:top-4 md:top-12 
                right-2 sm:right-4 md:right-12 
                w-[80px] sm:w-[110px] md:w-[150px] lg:w-[180px]
                object-contain
              "
            />
          </div>
        </div>

        {/* CATEGORY SECTION */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            OUR MAIN CATEGORY
          </h1>
        </div>

      </article>
    </>
  );
};

export default Home;
