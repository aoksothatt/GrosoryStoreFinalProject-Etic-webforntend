import React from "react";
import Myheropic from "../img/8324749.png";

const Home = () => {
  return (
    <>
      <article className="w-full max-w-[1400px] mx-auto px-4">

        {/* HERO SECTION */}
        <div className="
          flex flex-col md:flex-row justify-center items-center 
          gap-8 md:gap-16 lg:gap-24 
          bg-linear-to-b from-blue-300 to-green-300
          h-auto py-10 md:py-16 lg:py-20
          mt-4 rounded-t-3xl px-4
        ">
          
          {/* LEFT TEXT SECTION */}
          <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
            
            <h6 className="text-sm md:text-base lg:text-lg font-medium text-gray-700 md:pb-10">
              Fresh & Authentic
            </h6>

            <h1 className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
              font-extrabold leading-tight
            ">
              DELICIOUS FOOD TO <br className="hidden md:block" />
              CURB YOUR HUNGRY
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Our organic whole milk comes from pasture-raised cows,
              free from artificial hormones and antibiotics,
              ensuring a rich and creamy taste in every sip.
            </p>

            <div className="flex md:block justify-center">
              <button
                className="
                w-32 md:w-44 h-11 md:h-12
                bg-gradient-to-r from-blue-500 to-green-500 
                text-white text-sm md:text-base font-semibold
                rounded-full transition-all cursor-pointer 
                hover:shadow-lg hover:scale-105 md:mt-30
                "
              >
                Order Now
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={Myheropic}
              alt="Delicious Food"
              className="
                w-full max-w-[260px] sm:max-w-[350px] md:max-w-[450px]
                lg:max-w-[550px] xl:max-w-[650px]
                h-auto object-contain
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
