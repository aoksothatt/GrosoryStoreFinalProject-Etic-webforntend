import React from "react";
import Myheropic from "../img/8324749.png";
import CatagoryCard from "../components/CatagoryCard";
const Home = () => {
  return (
    <>
      <article className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 sm:px-0">
        {/* Hero Section - Always side by side, just scales down */}
        <div
          className="flex justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32
          h-[56vh] sm:h-[60vh] md:h-[55vh] lg:h-[95vh] w-full 
          bg-gradient-to-b from-blue-300 to-green-300 
          mt-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-4xl 
          px-2 sm:px-4 md:px-8 lg:px-12"
        >
          {/* Text Content - Always on left */}
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-7 lg:gap-6 flex-1">
            <h6 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
              Fresh & Authentic
            </h6>

            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">
              DELICIOUS FOOD TO <br /> CURB YOUR HUNGRY
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Our organic whole milk comes from pasture-raised cows,{" "}
              <br className="hidden md:block" />
              free from synthetic hormones and antibiotics, delivering a rich
              and creamy taste.
            </p>

            <button
              className="w-28 sm:w-36 md:w-44 lg:w-52 h-10 sm:h-11 md:h-12 lg:h-14
              bg-gradient-to-r from-blue-500 to-green-500 
              text-white text-xs sm:text-sm md:text-base font-semibold
              rounded-full transition-all cursor-pointer 
              hover:shadow-lg hover:scale-105"
            >
              Order Now
            </button>
          </div>

          {/* Hero Image - Always on right */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={Myheropic}
              alt="Delicious Food"
              className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[670px] lg:max-w-[560px] xl:max-w-[690px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Category Section */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-32">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            OUR MAIN CATEGORY
          </h1>

          {/* <div className="mt-1 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-10"> */}
          {/* CategoryCard component goes here */}
          {/* <div className="text-gray-500 text-sm">
              <CatagoryCard />
            </div> */}
          {/* </div> */}
        </div>
      </article>
    </>
  );
};

export default Home;
